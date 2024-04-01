import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image, StyleSheet } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({

  imageProfile: {
    width: 32,
    marginLeft: 12,
    height: 32,
    borderRadius: 8,
  }
})

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (

    // Configuracoes Tabs
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00D7FF',
        headerShown: true,
        headerTitle: 'Bem vindo!',
        tabBarStyle: {
          backgroundColor: "#fff",

        },
        headerTitleStyle: {
          color: '#000'
        }
      }}>

      {/* Tab Painel Inicial(Home) */}
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Image
              style={styles.imageProfile}
              source={require('../../assets/images/rdicon.png')}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="calendar"
                    size={22}
                    color={'#000'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerStyle: {
            backgroundColor: "#fff",
          }
        }}
      />

      {/* Tab Painel Administrativo */}
      <Tabs.Screen
        name='administrativo'
        options={{
          title: "Administrativo",

          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,

          headerLeft: () => (
            <Image
              style={styles.imageProfile}
              source={require('../../assets/images/rdicon.png')}
            />
          ),

          headerRight: () => (
            <Link href="/modal" asChild>

              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="calendar"
                    size={22}
                    color={'#000'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>

            </Link>

          ),
          headerStyle: {
            backgroundColor: "#fff"
          },
        }}
      />

      {/* Tab Configuracoes */}
      <Tabs.Screen
        name="config"
        options={{
          title: 'Config',
          headerShown: false,


          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,

          headerLeft: () => (
            <Image
              style={styles.imageProfile}
              source={require('../../assets/images/rdicon.png')}
            />
          ),
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="calendar"
          //           size={22}
          //           color={'#000'}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
          headerStyle: {
            backgroundColor: "#fff"
          },

        }}
      />
    </Tabs>
  );
}