// Function to add more items dynamically to the addon list
function addAddon() {
    const addonList = document.getElementById('addon-list');
    
    const newAddon = document.createElement('div');
    newAddon.classList.add('addon-item');
    
    // Replace SVG with Emoji (Battery)
    newAddon.innerHTML = `
      🔋
      <p>Battery <span class="subtitle">82.3 kWh Sport Battery</span></p>
    `;
    
    addonList.appendChild(newAddon);
  }
  
  // Function to remove all items
  function removeAll() {
    const addonList = document.getElementById('addon-list');
    addonList.innerHTML = '';  // Clear all addons
  }
  