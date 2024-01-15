import { useSelector } from "react-redux";
import { user_balance } from "../../Redux/Slices/Betslice";
import { b_account } from "../../Redux/Slices/Betslice";
import { selectedList } from "../../Redux/Slices/BetSlipslice";
import { progress_bonus } from "../../Redux/Slices/BetSlipslice";
// state values from betslipslice
export const selected_events = useSelector(selectedList);
export const account_balance = useSelector(user_balance);
export const bonusAcc_balance = useSelector(b_account);
export const num_events = selected_events.length;
export const bonusProgress = useSelector(progress_bonus);