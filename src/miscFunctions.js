function linkIsActive(link, location) {
  if (!location) return false;
  else if (location.pathname.toString() === link.toString()) {
    return true;
  }

  return false;
}

export { linkIsActive };
