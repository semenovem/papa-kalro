import {getState} from "../../store/index";

/**
 * Выбор списка продуктов указанной секции
 * @param {ModelOrderBase[]} itemLi
 * @param {String} section
 */
export function filterItemLiBySection(itemLi, section) {
    const productIdHash = getState().product.section[section]
        .reduce((res, product) => {
            res[product.id] = true;
            return res;
        }, {});

    // todo сделать полное клонирование объекта
    return itemLi.filter(item => productIdHash[item.productId]);
}
