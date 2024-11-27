
class ConfigurationManager {
  constructor() {
    if (ConfigurationManager.instance) {
      return ConfigurationManager.instance;
    }

    this.configurations = [];
    ConfigurationManager.instance = this;
  }

  addConfiguration(config) {
    this.configurations.push(config);
  }

  viewConfigurations() {
    return this.configurations.length
      ? this.configurations
      : ["No configurations available"];
  }

  resetConfigurations() {
    this.configurations = [];
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const configManager = new ConfigurationManager();
  const outputDiv = document.getElementById("output");

  document.getElementById("addConfig").addEventListener("click", () => {
    const configValue = prompt("Enter the configuration value:");
    if (configValue) {
      configManager.addConfiguration(configValue);
      outputDiv.innerHTML = "Configuration added successfully!";
    }
  });

  document.getElementById("viewConfigs").addEventListener("click", () => {
    const configs = configManager.viewConfigurations();
    outputDiv.innerHTML = `<pre>${JSON.stringify(configs, null, 2)}</pre>`;
  });

  document.getElementById("resetConfigs").addEventListener("click", () => {
    configManager.resetConfigurations();
    outputDiv.innerHTML = "All configurations have been reset.";
  });
});
