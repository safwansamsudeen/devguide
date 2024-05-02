// Based on https://stackoverflow.com/a/38241481/724176
function getOS() {
  const userAgent = window.navigator.userAgent,
    platform =
      window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  if (macosPlatforms.includes(platform)) {
    return "macOS";
  } else if (iosPlatforms.includes(platform)) {
    return "iOS";
  } else if (windowsPlatforms.includes(platform)) {
    return "Windows";
  } else if (/Android/.test(userAgent)) {
    return "Android";
  } else if (/Linux/.test(platform)) {
    return "Unix";
  }

  return "unknown";
}

function activateTab(tabName) {
  // Find all label elements containing the specified tab name
  const labels = document.querySelectorAll(".tab-label");

  labels.forEach((label) => {
    if (label.textContent.includes(tabName)) {
      // Find the associated input element using the 'for' attribute
      const tabInputId = label.getAttribute("for");
      const tabInput = document.getElementById(tabInputId);

      // Check if the input element exists before attempting to set the "checked" attribute
      if (tabInput) {
        // Activate the tab by setting its "checked" attribute to true
        tabInput.checked = true;
      }
    }
  });
}
