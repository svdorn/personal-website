function linkIsActive(link, location) {
  if (!location) return false;
  else if (location.pathname.toString() === link.toString()) {
    return true;
  }

  return false;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { linkIsActive, numberWithCommas };
