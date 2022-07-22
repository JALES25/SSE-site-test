"use strict";
const resizeOps = () => {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
};

resizeOps();
window.addEventListener("resize", resizeOps);

// CONVERTER LOGIC

// Grab all DOM elements

const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");
const metersFeet = document.getElementById("meters-feet");
const feetMeters = document.getElementById("feet-meters");
const litersGallons = document.getElementById("liters-gallons");
const gallonsLiters = document.getElementById("gallons-liters");
const kiloPounds = document.getElementById("kilograms-pounds");
const poundsKilo = document.getElementById("pounds-kilograms");

const cmIn = document.getElementById("cm-in");
const inCm = document.getElementById("in-cm");

const feetIn = document.getElementById("ft-in");
const inFeet = document.getElementById("in-ft");

// Set click functionality

convertBtn.addEventListener("click", function () {
  const userUnits = userInput.value;
  // Convert Meters to Feet
  const metersToFeet = userUnits * 3.28;
  // Add Math Result To DOM
  metersFeet.textContent = `${userUnits} meters = ${metersToFeet.toFixed(
    2
  )} feet`;

  // Convert Feet to Meters
  const feetToMeters = userUnits / 3.28;
  // Add Math Result To DOM
  feetMeters.textContent = `${userUnits} feet = ${feetToMeters.toFixed(
    2
  )} meters`;

  // Convert Liters to Gallons
  const litersToGallons = userUnits * 0.264;
  // Add Math Result To DOM
  litersGallons.textContent = `${userUnits} liters = ${litersToGallons.toFixed(
    2
  )} gallons`;

  // Convert Gallons to Liters
  const gallonsToLiters = userUnits / 0.264;
  // Add Math Result To DOM
  gallonsLiters.textContent = `${userUnits} gallons = ${gallonsToLiters.toFixed(
    2
  )} liters`;

  // Convert Kilos to Pounds
  const kilosToPounds = userUnits * 2.204;
  // Add Math Result To DOM
  kiloPounds.textContent = `${userUnits} kilos = ${kilosToPounds.toFixed(
    2
  )} popunds`;

  // Convert Pounds to Kilos
  const poundsToKilos = userUnits / 2.204;
  // Add Math Result To DOM
  poundsKilo.textContent = `${userUnits} pounds = ${poundsToKilos.toFixed(
    2
  )} kilos`;

  // Convert CM to IN
  const cmToIn = userUnits * 0.393701;
  // Add Math Result To DOM
  cmIn.textContent = `${userUnits} centimeters = ${cmToIn.toFixed(2)} inches`;

  // Convert IN to CM
  const inToCm = userUnits / 0.393701;
  // Add Math Result To DOM
  inCm.textContent = `${userUnits} inches = ${inToCm.toFixed(2)} centimeters`;

  // Convert FT to IN
  const feetToInches = userUnits * 12;
  // Add Math Result To DOM
  feetIn.textContent = `${userUnits} feet = ${feetToInches.toFixed(2)} inches`;

  // Convert FT to IN
  const inchesToFeet = userUnits / 12;
  // Add Math Result To DOM
  inFeet.textContent = `${userUnits} inches = ${inchesToFeet.toFixed(2)} feet`;
});
