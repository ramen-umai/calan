const datalist = {
    pöteles: {
        id: "000AAA",
        name: "PÖTELES ペテレス 綿 110g 業務用",
        description: "ブリカストのPÖTELES（ぺテレス）で生産される高品質な110gの業務用製品です。",
        money: {
            jpy: 150,
            cvd: 300,
            kira: 450,
            ki: 900
        }
    }
};

const container = document.getElementById("cardContainer");

Object.values(datalist).forEach(item => {

    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
        <div class="card h-100 shadow">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>

                <div class="mb-2">
                    <select class="form-select currency-select">
                        <option value="jpy">円</option>
                        <option value="cvd">クロバドル</option>
                        <option value="kira">キラ</option>
                        <option value="ki">キ</option>
                    </select>
                    <br>
                    <p class="fw-bold price">
                        JPY: ${item.money.jpy}
                    </p>
                </div>

                <a href="bay.html?id=${item.id}" class="btn btn-primary">
                    購入
                </a>
            </div>
        </div>
    `;

    container.appendChild(col);

    // --- ここが重要 ---
    const select = col.querySelector(".currency-select");
    const priceText = col.querySelector(".price");

    select.addEventListener("change", () => {
        const currency = select.value;
        const price = item.money[currency];
        priceText.textContent = `${currency.toUpperCase()}: ${price}`;
    });
});
