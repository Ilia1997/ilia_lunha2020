class LocalStorageUtil {
  constructor() {
    this.keyName = "btns";
  }

  getBtns() {
    const btnLocalStorage = localStorage.getItem(this.keyName);

    if (btnLocalStorage !== null) {
      return JSON.parse(btnLocalStorage);
    }
    return [];
  }
  setBtns(id) {
    let btn = this.getBtns();
    let pushBtn = false;
    const index = btn.indexOf(id);
    if (index === -1) {
      btn.push(id);
      pushBtn = true;
    } else {
      btn.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(btn));

    return { pushBtn, btn };
  }
}

module.exports = LocalStorageUtil;
