function downloadCV(language) {
    const link = document.createElement('a');

    if (language === "pt-br") {
        link.href = '../../resources/ats/ATS (PT-BR).pdf';
    } else {
        link.href = 'src/resources/ats/ATS (EN).pdf';
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