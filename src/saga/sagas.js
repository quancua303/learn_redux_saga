import { takeLatest, put, call } from "redux-saga/effects"
import { loadSuccess, loadFail, addFail, addSuccess } from './../action/action';
import { loadData, addProduct } from "./../api";
import { types } from './../action/types';

export function* onLoadProductsStartAsync() {
    try {
        const res = yield call(loadData);
        console.log('res', res.data)
        yield put(loadSuccess(res.data));
    } catch (error) {
        yield put(loadFail(error));
    }
}

export function* onLoadProduct() {
    yield takeLatest(types.LOAD_POST_START, onLoadProductsStartAsync);
}

export function* addProductAsync() {
    try {
        const res = yield call(addProduct);
        yield put(addSuccess(res.data));
    } catch (error) {
        yield put(addFail(error));
    }
}
