// script.js
const cgpaResult = document.getElementById("cgpaResult");
const resultBtn = document.getElementById("result");

resultBtn.addEventListener('click', function (e) {
    const sgpa1 = parseFloat(document.getElementById('semester1').value);
    const sgpa2 = parseFloat(document.getElementById('semester2').value);
    const sgpa3 = parseFloat(document.getElementById('semester3').value);
    const sgpa4 = parseFloat(document.getElementById('semester4').value);
    const sgpa5 = parseFloat(document.getElementById('semester5').value);
    const sgpa6 = parseFloat(document.getElementById('semester6').value);
    const sgpa7 = parseFloat(document.getElementById('semester7').value);
    const sgpa8 = parseFloat(document.getElementById('semester8').value);

    const totalSGPA = sgpa1 + sgpa2 + sgpa3 + sgpa4 + sgpa5 + sgpa6 + sgpa7 + sgpa8;
    const cgpa = totalSGPA / 8;

    cgpaResult.textContent = `Your CGPA: ${cgpa}`;
});
