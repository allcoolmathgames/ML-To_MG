// Function to convert ml to mg
function convertMlToMg() {
    const mlInput = document.getElementById('mlInput');
    const mainSelect = document.getElementById('mainSelect');
    const medicationSelect = document.getElementById('medicationSelect');
    const densityInput = document.getElementById('densityInput');
    const concentrationInput = document.getElementById('concentrationInput');
    const resultValue = document.getElementById('result-value');

    const ml = parseFloat(mlInput.value);
    let factor;
    let calculationType;

    // Determine which dropdown is active
    const mainSelection = mainSelect.value;
    const isMedicationSelected = mainSelection === 'medication';

    if (isMedicationSelected) {
        if (medicationSelect.value === '') {
            resultValue.innerHTML = 'Please select a medication.';
            resultValue.style.color = 'red';
            return;
        }
        factor = parseFloat(concentrationInput.value);
        calculationType = 'Concentration';
    } else {
        if (mainSelection === '') {
            resultValue.innerHTML = 'Please select a liquid or a medication.';
            resultValue.style.color = 'red';
            return;
        }
        factor = parseFloat(densityInput.value);
        calculationType = 'Density';
    }

    if (isNaN(ml) || isNaN(factor) || ml <= 0 || factor <= 0) {
        resultValue.innerHTML = `Please enter valid positive numbers for volume and ${calculationType}.`;
        resultValue.style.color = 'red';
        return;
    }

    const mg = ml * factor;
    resultValue.innerHTML = `${ml} ml = ${mg.toLocaleString()} mg`;
    resultValue.style.color = 'green';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const mainSelect = document.getElementById('mainSelect');
    const medicationSelect = document.getElementById('medicationSelect');
    const medicationGroup = document.getElementById('medicationGroup');
    const densityGroup = document.getElementById('densityGroup');
    const densityInput = document.getElementById('densityInput');
    const concentrationGroup = document.getElementById('concentrationGroup');
    const concentrationInput = document.getElementById('concentrationInput');

    // Main dropdown event listener
    mainSelect.addEventListener('change', () => {
        const selectedValue = mainSelect.value;
        // Reset all groups and inputs
        medicationGroup.classList.add('hidden');
        densityGroup.classList.add('hidden');
        concentrationGroup.classList.add('hidden');
        densityInput.value = '';
        concentrationInput.value = '';

        if (selectedValue === 'medication') {
            medicationGroup.classList.remove('hidden');
        } else if (selectedValue === 'custom-liquid') {
            densityGroup.classList.remove('hidden');
        } else if (selectedValue !== '') {
            const selectedOption = mainSelect.options[mainSelect.selectedIndex];
            const density = selectedOption.dataset.density;
            if (density) {
                densityInput.value = density;
                densityGroup.classList.remove('hidden');
            }
        }
    });

    // Medication dropdown event listener
    medicationSelect.addEventListener('change', () => {
        const selectedValue = medicationSelect.value;
        concentrationInput.value = '';
        concentrationGroup.classList.remove('hidden');

        if (selectedValue === 'custom-medication') {
            concentrationInput.placeholder = 'Enter custom concentration';
        } else if (selectedValue !== '') {
            const selectedOption = medicationSelect.options[medicationSelect.selectedIndex];
            const concentration = selectedOption.dataset.concentration;
            if (concentration) {
                concentrationInput.value = concentration;
            }
        }
    });
});

// FAQ toggle function
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const icon = faqItem.querySelector('.toggle-icon');

    if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        answer.style.maxHeight = '0px';
        icon.textContent = '+';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '-';
    }
}

// All other conversion functions (Mg to Ml, G to L, etc.) remain the same
// ... (your provided code for other conversions)
function convertMgToMl() {
    const mgInput = document.getElementById('mgInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');
    const mg = parseFloat(mgInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(mg) || mg <= 0 || isNaN(density) || density <= 0) {
        resultValue.innerHTML = "Please enter a valid mass and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const ml = mg / density;
    resultValue.innerHTML = `<strong>Result:</strong> ${ml.toFixed(2)} ml`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertGToL() {
    const gInput = document.getElementById('gInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');
    const g = parseFloat(gInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(g) || g <= 0 || isNaN(density) || density <= 0) {
        resultValue.innerHTML = "Please enter a valid mass and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const l = g / (density * 1000);
    resultValue.innerHTML = `<strong>Result:</strong> ${l.toFixed(2)} L`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertKgToL() {
    const kgInput = document.getElementById('kgInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');
    const kg = parseFloat(kgInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(kg) || kg <= 0 || isNaN(density) || density <= 0) {
        resultValue.innerHTML = "Please enter a valid mass and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const l = kg / density;
    resultValue.innerHTML = `<strong>Result:</strong> ${l.toFixed(2)} L`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertLToG() {
    const lInput = document.getElementById('lInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');
    const l = parseFloat(lInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(l) || l <= 0 || isNaN(density) || density <= 0) {
        resultValue.innerHTML = "Please enter a valid volume and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const g = l * density;
    resultValue.innerHTML = `<strong>Result:</strong> ${g.toFixed(2)} g`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertLToKg() {
    const lInput = document.getElementById('lInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');
    const l = parseFloat(lInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(l) || l <= 0 || isNaN(density) || density <= 0) {
        resultValue.innerHTML = "Please enter a valid volume and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const kg = l * density;
    resultValue.innerHTML = `<strong>Result:</strong> ${kg.toFixed(2)} kg`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertMlToG() {
    const mlInput = document.getElementById('mlInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');
    const ml = parseFloat(mlInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(ml) || ml <= 0 || isNaN(density) || density <= 0) {
        resultValue.innerHTML = "Please enter a valid volume and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const g = ml * density;
    resultValue.innerHTML = `<strong>Result:</strong> ${g.toFixed(2)} g`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertMlToOz() {
    const mlInput = document.getElementById('mlInput');
    const resultValue = document.getElementById('result-value');
    const ml = parseFloat(mlInput.value);

    if (isNaN(ml) || ml <= 0) {
        resultValue.innerHTML = "Please enter a valid volume.";
        resultValue.style.color = "red";
        return;
    }

    const oz = ml * 0.033814;
    resultValue.innerHTML = `<strong>Result:</strong> ${oz.toFixed(2)} oz`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertOzToMl() {
    const ozInput = document.getElementById('ozInput');
    const resultValue = document.getElementById('result-value');
    const oz = parseFloat(ozInput.value);

    if (isNaN(oz) || oz <= 0) {
        resultValue.innerHTML = "Please enter a valid volume in ounces.";
        resultValue.style.color = "red";
        return;
    }

    const ml = oz / 0.033814;
    resultValue.innerHTML = `<strong>Result:</strong> ${ml.toFixed(2)} ml`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function convertGToMl() {
    const gInput = document.getElementById('gInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');
    const g = parseFloat(gInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(g) || g <= 0 || isNaN(density) || density <= 0) {
        resultValue.innerHTML = "Please enter a valid mass and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const ml = g / density;
    resultValue.innerHTML = `<strong>Result:</strong> ${ml.toFixed(2)} ml`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}