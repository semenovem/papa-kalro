import {getState} from "../../store/index";

/**
 * Выбор списка продуктов указанного продуктового раздела
 * @param {ModelOrderItemBase[]} itemLi
 * @param {String} section
 */
export function filterItemLiBySection(itemLi, section) {
    const productHash = getState().product.hash;

    // todo сделать полное клонирование объекта
    return itemLi.filter(
        item => item.section !== null ?
        item.section === section : productHash[item.productId].section === section
    );
}
