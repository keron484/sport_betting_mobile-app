import { useDispatch } from "react-redux";
import { slipActions } from "../../Redux/Slices/BetSlipslice";
export const isDecimal = (number) => {
    const numberString = number.toString();
    return numberString.includes(".");
}
//dispatching actions from reducers
//dispatching all actions from betslipSlice
export const betSlip = () => {
    const dispatch = useDispatch();
    dispatch(slipActions.togglebetslip())
}
export const promo = () => {
    const dispatch = useDispatch();
    dispatch(slipActions.togglePromo())
}
export const bonus = () => {
    const dispatch = useDispatch();
    dispatch(slipActions.toggleBonus())
}
export const RemoveAll = () => {
    const dispatch = useDispatch();
    dispatch(slipActions.removeAllfromslip());
}
export const removeItem = (id) => {
    const dispatch = useDispatch();
    dispatch(slipActions.removeFromslip(id))
}
export const PlaceBonusBet =  (stake, potential_wininings, totalOdds, num_events, selected_events) => {
    const dispatch = useDispatch();
    dispatch(placebetActions.placebousbet({
      stake,
      potential_wininings,
      totalOdds,
      date:"12-29-2023",
      bettype: num_events <= 1 ? "Single" : "Accumulator",
      selected_events
    }))
}
