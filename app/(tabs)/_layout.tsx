import { Tabs } from 'expo-router';
import { View, Text, Platform } from 'react-native';
import { Colors, Typography } from '../../constants/theme';

type TabIconProps = {
  focused: boolean;
  icon: string;
  label: string;
};

function TabIcon({ focused, icon, label }: TabIconProps) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 16,
        backgroundColor: focused ? Colors.secondaryContainer : 'transparent',
        minWidth: 64,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          color: focused ? Colors.onSecondaryContainer : Colors.onSurfaceVariant,
          fontFamily: 'MaterialSymbolsOutlined',
        }}
      >
        {icon}
      </Text>
      <Text
        style={{
          fontSize: 9,
          fontFamily: Typography.bodyBold,
          letterSpacing: 0.8,
          textTransform: 'uppercase',
          color: focused ? Colors.onSecondaryContainer : Colors.onSurfaceVariant,
          marginTop: 2,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 88 : 70,
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderTopWidth: 0,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          shadowColor: Colors.onSurface,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.04,
          shadowRadius: 32,
          elevation: 12,
          paddingBottom: Platform.OS === 'ios' ? 24 : 8,
          paddingTop: 8,
          paddingHorizontal: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" label="Inicio" />
          ),
        }}
      />
      <Tabs.Screen
        name="historial"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="history" label="Historial" />
          ),
        }}
      />
      <Tabs.Screen
        name="reserva"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="calendar_month" label="Reserva" />
          ),
        }}
      />
      <Tabs.Screen
        name="personal"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="group" label="Personal" />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="person" label="Perfil" />
          ),
        }}
      />
    </Tabs>
  );
}
