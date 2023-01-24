import {
  Loading,
  Message,
  MessageBox,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Avatar,
  Form,
  FormItem,
  Input,
  Popover,
  Tooltip,
} from "element-ui";

const eleCpns = [
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Avatar,
  Form,
  FormItem,
  Input,
  Popover,
  Tooltip
]

const useEle = {
  install(Vue) {
    eleCpns.forEach(cpn => {
      Vue.use(cpn)
    })
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$message = Message;

    Vue.use(Loading.directive);
    Vue.prototype.$loading = Loading.service;
  }
}

export default useEle


