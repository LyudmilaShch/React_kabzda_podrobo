import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";
import {action} from "@storybook/addon-actions";

test("reducer should change value to opposite value", () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(true)

})

test("collapsed should be false", () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(false)

})

test("reducer should throw error because action type is incorrect", () => {

    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError();

})