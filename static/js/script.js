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

// 2. KG to L
function convertKgToL() {
    const kgInput = document.getElementById('kgInput');
    const mainSelect = document.getElementById('mainSelect');
    const densityInput = document.getElementById('densityInput');
    const resultValue = document.getElementById('result-value');

    const kg = parseFloat(kgInput.value);
    let density;

    if (mainSelect.value === 'custom-liquid') {
        density = parseFloat(densityInput.value);
    } else {
        const selectedOption = mainSelect.options[mainSelect.selectedIndex];
        density = parseFloat(selectedOption.dataset.density);
    }

    if (isNaN(kg) || isNaN(density) || kg <= 0 || density <= 0) {
        resultValue.innerHTML = "Please enter valid positive numbers for mass and density.";
        resultValue.style.color = "red";
        return;
    }

    const liters = kg / (density / 1000); 
    resultValue.innerHTML = `${kg} kg = ${liters.toFixed(4)} L`;
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
    const gInput = document.getElementById('gramInput');
    const mainSelect = document.getElementById('mainSelect');
    const densityInput = document.getElementById('densityInput');
    const resultValue = document.getElementById('result-value');

    const g = parseFloat(gInput.value);
    let density;

    if (mainSelect.value === 'custom-liquid') {
        density = parseFloat(densityInput.value);
    } else {
        const selectedOption = mainSelect.options[mainSelect.selectedIndex];
        density = parseFloat(selectedOption.dataset.density);
    }

    if (isNaN(g) || isNaN(density) || g <= 0 || density <= 0) {
        resultValue.innerHTML = "Please enter valid positive numbers for mass and density.";
        resultValue.style.color = "red";
        return;
    }

    const liters = g / (density * 1000);
    resultValue.innerHTML = `${g} g = ${liters.toFixed(4)} L`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 5. L to G
function convertLToG() {
    const lInput = document.getElementById('lInput');
    const mainSelect = document.getElementById('mainSelect');
    const densityInput = document.getElementById('densityInput');
    const resultValue = document.getElementById('result-value');

    const liters = parseFloat(lInput.value);
    let density;

    if (mainSelect.value === 'custom-liquid') {
        density = parseFloat(densityInput.value);
    } else {
        const selectedOption = mainSelect.options[mainSelect.selectedIndex];
        density = parseFloat(selectedOption.dataset.density);
    }

    if (isNaN(liters) || isNaN(density) || liters <= 0 || density <= 0) {
        resultValue.innerHTML = "Please enter valid positive numbers for volume and density.";
        resultValue.style.color = "red";
        return;
    }

    const grams = liters * (density * 1000);
    resultValue.innerHTML = `${liters} L = ${grams.toFixed(2)} g`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 6. L to KG
function convertLToKg() {
    const lInput = document.getElementById('lInput');
    const mainSelect = document.getElementById('mainSelect');
    const densityInput = document.getElementById('densityInput');
    const resultValue = document.getElementById('result-value');

    const liters = parseFloat(lInput.value);
    let density;

    if (mainSelect.value === 'custom-liquid') {
        density = parseFloat(densityInput.value);
    } else {
        const selectedOption = mainSelect.options[mainSelect.selectedIndex];
        density = parseFloat(selectedOption.dataset.density);
    }

    if (isNaN(liters) || isNaN(density) || liters <= 0 || density <= 0) {
        resultValue.innerHTML = "Please enter valid positive numbers for volume and density.";
        resultValue.style.color = "red";
        return;
    }

    const kg = liters * (density / 1000);
    resultValue.innerHTML = `${liters} L = ${kg.toFixed(2)} kg`;
    resultValue.style.color = "var(--primary-color)";
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 7. ML to G
function convertMlToG() {
    const mlInput = document.getElementById('mlInput');
    const mainSelect = document.getElementById('mainSelect');
    const densityInput = document.getElementById('densityInput');
    const resultValue = document.getElementById('result-value');

    const ml = parseFloat(mlInput.value);
    let density;

    if (mainSelect.value === 'custom-liquid') {
        density = parseFloat(densityInput.value);
    } else {
        const selectedOption = mainSelect.options[mainSelect.selectedIndex];
        density = parseFloat(selectedOption.dataset.density);
    }

    if (isNaN(ml) || isNaN(density) || ml <= 0 || density <= 0) {
        resultValue.innerHTML = "Please enter valid positive numbers for volume and density.";
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
    const mainSelect = document.getElementById('mainSelect');
    const densityInput = document.getElementById('densityInput');
    const resultValue = document.getElementById('result-value');

    const g = parseFloat(gInput.value);
    let density;

    if (mainSelect.value === 'custom-liquid') {
        density = parseFloat(densityInput.value);
    } else {
        const selectedOption = mainSelect.options[mainSelect.selectedIndex];
        density = parseFloat(selectedOption.dataset.density);
    }

    if (isNaN(g) || isNaN(density) || g <= 0 || density <= 0) {
        resultValue.innerHTML = "Please enter valid positive numbers for mass and density.";
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
    const mainSelect = document.getElementById('mainSelect');
    const densityGroup = document.getElementById('densityGroup');
    const densityInput = document.getElementById('densityInput');

    // This section is for all pages that have a 'mainSelect' dropdown and a 'densityGroup'
    if (mainSelect && densityGroup) {
        mainSelect.addEventListener('change', () => {
            const selectedValue = mainSelect.value;
            const selectedOption = mainSelect.options[mainSelect.selectedIndex];
            const density = selectedOption.dataset.density;

            densityGroup.classList.add('hidden');
            densityInput.value = '';
            densityInput.readOnly = false; // By default, set to editable

            if (selectedValue === 'custom-liquid') {
                densityGroup.classList.remove('hidden');
                densityInput.placeholder = 'Enter custom density';
            } else if (selectedValue) {
                if (density) {
                    densityInput.value = density;
                    densityGroup.classList.remove('hidden');
                    densityInput.readOnly = true; // Make it read-only for pre-filled values
                }
            }
        });
    }

    // Additional handlers for specific pages (like ML to MG)
    const medicationSelect = document.getElementById('medicationSelect');
    const medicationGroup = document.getElementById('medicationGroup');
    const concentrationGroup = document.getElementById('concentrationGroup');
    const concentrationInput = document.getElementById('concentrationInput');

    if (mainSelect && medicationSelect) { // This part is specific to the ML-to-MG and MG-to-ML tools
        mainSelect.addEventListener('change', () => {
            const selectedValue = mainSelect.value;
            medicationGroup?.classList.add('hidden');
            concentrationGroup?.classList.add('hidden');
            concentrationInput.value = '';

            if (selectedValue === 'medication') {
                medicationGroup?.classList.remove('hidden');
            }
        });

        medicationSelect.addEventListener('change', () => {
            const selectedValue = medicationSelect.value;
            concentrationInput.value = '';
            concentrationInput.readOnly = false;

            if (selectedValue === 'custom-medication') {
                concentrationInput.placeholder = 'Enter custom concentration (mg/ml)';
                concentrationGroup?.classList.remove('hidden');
            } else if (selectedValue) {
                const selectedOption = medicationSelect.options[medicationSelect.selectedIndex];
                const concentration = selectedOption.dataset.concentration;
                if (concentration) {
                    concentrationInput.value = concentration;
                    concentrationInput.readOnly = true;
                    concentrationGroup?.classList.remove('hidden');
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

    if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
        answer.style.maxHeight = '0';
        icon.textContent = '+';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '-';
    }
}