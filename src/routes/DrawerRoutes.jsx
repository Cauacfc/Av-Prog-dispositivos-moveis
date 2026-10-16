import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: true,
        headerTintColor: "#111827",
        headerStyle: { backgroundColor: "#FFFFFF" },
        drawerActiveTintColor: "#7C3AED",
        drawerActiveBackgroundColor: "#EDE9FE",
        drawerInactiveTintColor: "#6B7280",
        drawerLabelStyle: { fontSize: 15, fontWeight: "600" },
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: "Início",
          title: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="product"
        component={Product}
        options={{
          drawerLabel: "Produtos",
          title: "Produtos",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          drawerLabel: "Perfil",
          title: "Perfil",
          drawerIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{
          drawerLabel: "Configurações",
          title: "Configurações",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
