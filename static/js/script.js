// ========== CONVERSION FUNCTIONS ========== //

// 1. ML to MG (Medication/Liquid)
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

    const mainSelection = mainSelect.value;
    const isMedicationSelected = mainSelection === 'medication';

    if (isMedicationSelected) {
        if (!medicationSelect.value) {
            resultValue.innerHTML = 'Please select a medication.';
            resultValue.style.color = 'red';
            return;
        }
        factor = parseFloat(concentrationInput.value);
        calculationType = 'concentration';
    } else {
        if (!mainSelection) {
            resultValue.innerHTML = 'Please select a liquid or medication.';
            resultValue.style.color = 'red';
            return;
        }
        factor = parseFloat(densityInput.value);
        calculationType = 'density';
    }

    if (isNaN(ml) || isNaN(factor) || ml <= 0 || factor <= 0) {
        resultValue.innerHTML = `Please enter valid positive numbers for volume and ${calculationType}.`;
        resultValue.style.color = 'red';
        return;
    }

    const mg = ml * factor;
    resultValue.innerHTML = `${ml} ml = ${mg.toLocaleString()} mg`;
    resultValue.style.color = 'var(--primary-color)';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 2. KG to L (Fixed)
function convertKgToL() {
    const kgInput = document.getElementById('kgInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');

    const kg = parseFloat(kgInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(kg) || kg <= 0 || !liquidSelect.value) {
        resultValue.innerHTML = "Please enter a valid mass and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const liters = kg / density;
    resultValue.innerHTML = `${kg} kg = ${liters.toFixed(2)} L`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 3. MG to ML
function convertMgToMl() {
    const mgInput = document.getElementById('mgInput');
    const mainSelect = document.getElementById('mainSelect');
    const medicationSelect = document.getElementById('medicationSelect');
    const densityInput = document.getElementById('densityInput');
    const concentrationInput = document.getElementById('concentrationInput');
    const resultValue = document.getElementById('result-value');

    const mg = parseFloat(mgInput.value);
    let factor;
    let calculationType;

    const mainSelection = mainSelect.value;
    const isMedicationSelected = mainSelection === 'medication';

    if (isMedicationSelected) {
        if (!medicationSelect.value) {
            resultValue.innerHTML = 'Please select a medication.';
            resultValue.style.color = 'red';
            return;
        }
        factor = parseFloat(concentrationInput.value);
        calculationType = 'concentration';
    } else {
        if (!mainSelection) {
            resultValue.innerHTML = 'Please select a liquid or medication.';
            resultValue.style.color = 'red';
            return;
        }
        factor = parseFloat(densityInput.value);
        calculationType = 'density';
    }

    if (isNaN(mg) || isNaN(factor) || mg <= 0 || factor <= 0) {
        resultValue.innerHTML = `Please enter valid positive numbers for mass and ${calculationType}.`;
        resultValue.style.color = 'red';
        return;
    }

    const ml = mg / factor;
    resultValue.innerHTML = `${mg} mg = ${ml.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ml`;
    resultValue.style.color = 'var(--primary-color)';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 4. G to L
function convertGToL() {
    const gInput = document.getElementById('gInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');

    const g = parseFloat(gInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(g) || g <= 0 || !liquidSelect.value) {
        resultValue.innerHTML = "Please enter a valid mass and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const liters = g / (density * 1000);
    resultValue.innerHTML = `${g} g = ${liters.toFixed(2)} L`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 5. L to G
function convertLToG() {
    const lInput = document.getElementById('lInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');

    const liters = parseFloat(lInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(liters) || liters <= 0 || !liquidSelect.value) {
        resultValue.innerHTML = "Please enter a valid volume and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const grams = liters * density;
    resultValue.innerHTML = `${liters} L = ${grams.toFixed(2)} g`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 6. L to KG
function convertLToKg() {
    const lInput = document.getElementById('lInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');

    const liters = parseFloat(lInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(liters) || liters <= 0 || !liquidSelect.value) {
        resultValue.innerHTML = "Please enter a valid volume and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const kg = liters * density;
    resultValue.innerHTML = `${liters} L = ${kg.toFixed(2)} kg`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 7. ML to G
function convertMlToG() {
    const mlInput = document.getElementById('mlInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');

    const ml = parseFloat(mlInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(ml) || ml <= 0 || !liquidSelect.value) {
        resultValue.innerHTML = "Please enter a valid volume and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const grams = ml * density;
    resultValue.innerHTML = `${ml} ml = ${grams.toFixed(2)} g`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 8. ML to OZ
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
    resultValue.innerHTML = `${ml} ml = ${oz.toFixed(2)} oz`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 9. OZ to ML
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
    resultValue.innerHTML = `${oz} oz = ${ml.toFixed(2)} ml`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 10. G to ML
function convertGToMl() {
    const gInput = document.getElementById('gInput');
    const liquidSelect = document.getElementById('liquidSelect');
    const resultValue = document.getElementById('result-value');

    const g = parseFloat(gInput.value);
    const density = parseFloat(liquidSelect.value);

    if (isNaN(g) || g <= 0 || !liquidSelect.value) {
        resultValue.innerHTML = "Please enter a valid mass and select a liquid.";
        resultValue.style.color = "red";
        return;
    }

    const ml = g / density;
    resultValue.innerHTML = `${g} g = ${ml.toFixed(2)} ml`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ========== DYNAMIC UI HANDLERS ========== //
document.addEventListener('DOMContentLoaded', () => {
    // For ML-to-MG (Medication/Liquid Dropdowns)
    const mainSelect = document.getElementById('mainSelect');
    const medicationSelect = document.getElementById('medicationSelect');
    const medicationGroup = document.getElementById('medicationGroup');
    const densityGroup = document.getElementById('densityGroup');
    const concentrationGroup = document.getElementById('concentrationGroup');
    const densityInput = document.getElementById('densityInput');
    const concentrationInput = document.getElementById('concentrationInput');

    if (mainSelect) { // Only run if the element exists (ML-to-MG page)
        mainSelect.addEventListener('change', () => {
            const selectedValue = mainSelect.value;
            medicationGroup?.classList.add('hidden');
            densityGroup?.classList.add('hidden');
            concentrationGroup?.classList.add('hidden');
            densityInput.value = '';
            concentrationInput.value = '';

            if (selectedValue === 'medication') {
                medicationGroup?.classList.remove('hidden');
            } else if (selectedValue === 'custom-liquid') {
                densityGroup?.classList.remove('hidden');
            } else if (selectedValue) {
                const selectedOption = mainSelect.options[mainSelect.selectedIndex];
                const density = selectedOption.dataset.density;
                if (density) {
                    densityInput.value = density;
                    densityGroup?.classList.remove('hidden');
                }
            }
        });
    }

    if (medicationSelect) { // Only run if the element exists (ML-to-MG page)
        medicationSelect.addEventListener('change', () => {
            const selectedValue = medicationSelect.value;
            concentrationInput.value = '';
            concentrationGroup?.classList.remove('hidden');

            if (selectedValue === 'custom-medication') {
                concentrationInput.placeholder = 'Enter custom concentration (mg/ml)';
            } else if (selectedValue) {
                const selectedOption = medicationSelect.options[medicationSelect.selectedIndex];
                const concentration = selectedOption.dataset.concentration;
                if (concentration) {
                    concentrationInput.value = concentration;
                }
            }
        });
    }
});

// ========== FAQ TOGGLE ========== //
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const icon = faqItem.querySelector('.toggle-icon');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.textContent = '+';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '-';
    }
}