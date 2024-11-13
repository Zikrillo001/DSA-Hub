// Linked list haqida ma'lumot chiqarish funksiyasi
function showLinkedListInfo() {
    alert("This topic covers Linked Lists!");
}

// Dinamik ravishda grafik chizish (diagramma)
function drawChart() {
    const chartDiv = document.getElementById("chart");
    // Chart.js yoki boshqa kutubxonalar bilan diagramma chizishingiz mumkin
    chartDiv.innerHTML = "<p>Linked List Diagram (Placeholder)</p>";
}

window.onload = function() {
    showLinkedListInfo();
    drawChart();
};
