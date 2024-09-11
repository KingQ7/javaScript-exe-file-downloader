function downloadFile(url, filename) {
    // Create a new anchor element
    const a = document.createElement('a');
    // Set the href attribute to the file URL
    a.href = url;
    // Set the download attribute with the filename
    a.download = filename;
    // Append the anchor to the body
    document.body.appendChild(a);
    // Programmatically click the anchor to trigger the download
    a.click();
    // Remove the anchor from the body
    document.body.removeChild(a);
}

// Example usage
const fileUrl = 'https://example.com/yourfile.exe'; // Replace with your file URL
const fileName = 'downloadedFile.exe'; // Replace with your desired file name

downloadFile(fileUrl, fileName);
