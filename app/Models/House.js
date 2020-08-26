import { generateId } from "../utils.js"

export default class House {
    constructor(style, size, year, price, img, description) {
        this.id = generateId()
        this.style = style
        this.size = size
        this.year = year
        this.price = price
        this.img = img
        this.description = description || "no description"
    }

    get Template() {

        return `   
          <div class="col-4">
                <div class="card">
                    <img class="card-img-top" src="//placehold.it/200x200" alt="">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
                            aspernatur consequuntur deserunt fuga facere optio sequi quisquam eaque totam alias illo
                            velit placeat minima ab assumenda consectetur, nulla dolorum nisi.
                        </p>
                        <div class="text-right">
                            <p>PRICE</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}