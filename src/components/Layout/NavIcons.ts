import AppsIcon from "@mui/icons-material/Apps";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import BrandingWatermarkRoundedIcon from "@mui/icons-material/BrandingWatermarkRounded";
import CategoryIcon from "@mui/icons-material/Category";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";
type MuiIcon = OverridableComponent<SvgIconTypeMap<object, "svg">>;

export const navIcons: Record<string, { filled: MuiIcon; outlined: MuiIcon }> =
  {
    dashboard: {
      filled: DashboardIcon,
      outlined: DashboardOutlinedIcon,
    },
    mock: {
      filled: AppsIcon,
      outlined: AppsOutlinedIcon,
    },
    category: {
      filled: CategoryIcon,
      outlined: CategoryOutlinedIcon,
    },
    card: {
      filled: CreditCardRoundedIcon,
      outlined: CreditCardOutlinedIcon,
    },
    product: {
      filled: Inventory2RoundedIcon,
      outlined: Inventory2OutlinedIcon,
    },
    productApproval: {
      filled: AssignmentTurnedInRoundedIcon,
      outlined: AssignmentTurnedInOutlinedIcon,
    },
    plan: {
      filled: Inventory2RoundedIcon,
      outlined: Inventory2OutlinedIcon,
    },
    brand: {
      filled: BrandingWatermarkRoundedIcon,
      outlined: BrandingWatermarkOutlinedIcon,
    },
    order: {
      filled: ReceiptLongRoundedIcon,
      outlined: ReceiptLongOutlinedIcon,
    },
    supplier: {
      filled: StorefrontRoundedIcon,
      outlined: StorefrontOutlinedIcon,
    },
    user: {
      filled: PeopleAltRoundedIcon,
      outlined: PeopleAltOutlinedIcon,
    },
    admin: {
      filled: ManageAccountsRoundedIcon,
      outlined: ManageAccountsOutlinedIcon,
    },
    role: {
      filled: Groups2RoundedIcon,
      outlined: Groups2OutlinedIcon,
    },
    permission: {
      filled: LockRoundedIcon,
      outlined: LockOutlinedIcon,
    },
    dashboardReport: {
      filled: BarChartRoundedIcon,
      outlined: BarChartOutlinedIcon,
    },
    report: {
      filled: AssessmentRoundedIcon,
      outlined: AssessmentOutlinedIcon,
    },
    charge: {
      filled: CreditCardRoundedIcon,
      outlined: CreditCardOutlinedIcon,
    },
  };
