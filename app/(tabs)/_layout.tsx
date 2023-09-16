import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

//https://icons.expo.fyi/Index
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'] | React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  family?: "FontAwesome" | "Ionicons";
}) {
  const { name, color, family = "FontAwesome" } = props;

  if (family === "FontAwesome") {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} name={name} color={color} />;
  } else if (family === "Ionicons") {
    return <Ionicons size={28} style={{ marginBottom: -3 }} name={name} color={color} />;
  }
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Add Food',
          tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color }) => <TabBarIcon name="fast-food" color={color} family="Ionicons" />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
        }}
      />
    </Tabs>

  );
}
