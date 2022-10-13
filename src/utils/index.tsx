import { TActionButton } from "../types";
import {
  FiMaximize2 as OpenIcon,
  FiCalendar,
  FiUnlock as PublicIcon,
  FiLoader as NormalIcon,
  FiStopCircle as EstimationIcon,
} from "react-icons/fi";

export const buttons: TActionButton[] = [
  {
    label: "Open",
    icon: <OpenIcon />,
    container: true,
  },
  {
    label: "Today",
    icon: <FiCalendar />,
  },
  {
    label: "Public",
    icon: <PublicIcon />,
  },
  {
    label: "Normal",
    icon: <NormalIcon />,
  },
  {
    label: "Estimation",
    icon: <EstimationIcon />,
  },
];
