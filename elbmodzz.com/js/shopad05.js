function openShopWindow(code) {
    console.log(document.getElementById("shoppyButton").getAttribute("data-shoppy-product"));
    document.getElementById("shoppyButton").setAttribute("data-shoppy-product", code);
    console.log(document.getElementById("shoppyButton").getAttribute("data-shoppy-product"));
    document.getElementById("shoppyButton").click()
    console.log(document.getElementById("shoppyButton").getAttribute("data-shoppy-product"));
}