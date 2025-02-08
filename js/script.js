document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("saveDocx").addEventListener("click", function () {
        // Alert Message
        if (!confirm("The document will be saved in DOCX format, but without styles. If you need to keep the formatting, try exporting to PDF.\n\n You can also use online PDF to DOCX converters. \n\nClick OK to continue.")) {
            return; // Cancel saving, if user clicked 'Cancel'
        }

        let content = document.body.cloneNode(true);

        // Delete elements no need
        content.querySelector("#saveDocx")?.remove();
        content.querySelector("footer")?.remove();

        // Create HTML-document
        let html = "<html><head><meta charset='UTF-8'></head><body>" + content.innerHTML + "</body></html>";

        // Checking, download htmlDocx
        if (typeof window.htmlDocx === "undefined") {
            console.error("htmlDocx not downloaded! Check root of file or link.");
            return;
        }

        let blob = htmlDocx.asBlob(html);

        // Get document title
        let fileName = document.title.trim() || "document"; // Default name if title is empty
        fileName = fileName.replace(/[<>:"/\\|?*]+/g, ""); // Remove invalid characters for file names

        // Create link for download
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.docx`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
