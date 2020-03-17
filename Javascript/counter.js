

with (document.getElementById('f1'))
incrementButtons(add, subtract, qty);

function incrementButtons(upBtn, downBtn, qtyField) {
    var step = parseFloat(qtyField.value) || 1,
        currentValue = step;

    downBtn.onclick = function () {
        currentValue = parseFloat(qtyField.value) || step;
        // qtyField.value = (currentValue -= Math.min(step, currentValue - step));
        qtyField.value = (currentValue -= 1);

    }

    upBtn.onclick = function () {
        currentValue = parseFloat(qtyField.value) || step;
        qtyField.value = (currentValue += 1);
    }
}