/**
 * Downloads the CV in the specified language.
 *
 * This function dynamically creates an anchor element to trigger the download
 * of a CV file in the desired language. The file is downloaded as a PDF and
 * the anchor element is removed from the DOM after the download is initiated.
 *
 * @param {string} language - The language of the CV to download. 
 *                             Use "pt-br" for Portuguese (Brazil) or any other value for English.
 */
function downloadCV(language) {
    const link = document.createElement('a');

    if (language === "pt-br") {
        link.href = '../../resources/nathan-dezan-ats-pt-br.pdf';
    } else {
        link.href = '../../resources/nathan-dezan-ats-en.pdf';
    }

    link.download = 'nathan-dezan-ats.pdf';
    link.target = '_blank';
    link.style.display = 'none';
    link.rel = 'noopener noreferrer';
    link.type = 'application/pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}