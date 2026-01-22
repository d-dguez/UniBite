import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MainMenu() {
    const router = useRouter();
    const stores = [
        { name: 'OXXO', rating: '4.5★', reviews: '(1000)', time: '20 mins', image: require('../Media/oxxoLogo.png') },
        { name: 'Tortas Erni', rating: '4.0★', reviews: '(750)', time: '10 mins', image: require('../Media/ernieLogo.png') },
        { name: 'Cafe Punta del Cielo', rating: '4.0★', reviews: '(500)', time: '10 mins', image: require('../Media/cafeLogo.png') },
        { name: 'Cafeteria Bon Appetit', rating: '4.5★', reviews: '(1000)', time: '20 mins', image: require('../Media/subwayLogo.jpg') },
        { name: 'Food Truck', rating: '3.5★', reviews: '(500)', time: '40 mins', image: require('../Media/carlsLogo.png') },
        { name: 'Tacos de Canasta', rating: '4.5★', reviews: '(100)', time: '10 mins', image: require('../Media/tacosLogo.png') },
        { name: 'Pastor Loco', rating: '4.0★', reviews: '(500)', time: '25 mins', image: require('../Media/kfcLogo.png') },
        { name: 'Cafeteria Chica', rating: '3.0★', reviews: '(250)', time: '25 mins', image: require('../Media/wendysLogo.png') },
    
  ];

    const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#fff', 
        paddingHorizontal: 15, 
        paddingTop: 25, 
    },
    topBar: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 15,
    },
    institution: { 
        fontSize: 18, 
        fontWeight: '700', 
        color: '#ff9800', 
        fontFamily: 'helvetica',
    },
    iconGroup: { 
        flexDirection: 'row', 
        gap: 15 
    },
    searchContainer: { 
        flexDirection: 'row', 
        backgroundColor: '#4caf50', 
        borderRadius: 10, 
        padding: 10, 
        alignItems: 'center' 
    },
    searchInput: { 
        flex: 1, 
        color: '#fff', 
        fontSize: 16,
        fontFamily: 'helvetica',
    },
    toggleContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        marginVertical: 5 
    },
    toggleBtn: { 
        backgroundColor: '#f6921e', 
        borderRadius: 20, 
        paddingVertical: 8, 
        paddingHorizontal: 25 
    },
    toggleText: { 
        color: '#fff', 
        fontWeight: '600' 
    },
    grid: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        paddingBottom: 80 
    },
    card: { 
        width: '48%', 
        backgroundColor: '#fff', 
        borderRadius: 15, 
        marginVertical: 8, 
        alignItems: 'center', 
        padding: 10, 
        elevation: 3, 
    },
    image: { 
        width: 80, 
        height: 80, 
        resizeMode: 'contain', 
        marginBottom: 5 
    },
    storeName: { 
        fontWeight: '700', 
        textAlign: 'center', 
        marginBottom: 2, 
        fontFamily: 'helvetica',
    },
    storeInfo: { 
        fontSize: 12, 
        color: 'gray', 
        fontFamily: 'helvetica',
    },
    bottomNav: { 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: '#fff', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        height: 60, 
        borderTopWidth: 0.5, 
        borderColor: '#f6921e',
        borderWidth: 3,
        borderRadius: 15,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        borderTopWidth: 3,
        marginBottom: 0.5,
    },
    bottomNavImg: { 
        width: 32, 
        height: 32,
    }
    });

  return (
    <View style={styles.container}>
        
      <View style={styles.topBar}>
        <Text style={styles.institution}>Prepa UCA</Text>
        <View style={styles.iconGroup}>
            <TouchableOpacity onPress={() => router.push('/notifications')}>
                <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/cart')}>
                <Ionicons name="cart-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="white" style={{ marginRight: 6 }} />
        <TextInput
          placeholder="Search in UniBite"
          placeholderTextColor="#fff"
          style={styles.searchInput}
        />
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {stores.map((store, i) => (
          <TouchableOpacity key={i} style={styles.card} onPress={() => router.push('/storeMenu')}>
            <Image source={store.image} style={styles.image} />
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.storeInfo}>{store.rating} {store.reviews} | {store.time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
        <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => router.push('/mainMenu')}>
                <Ionicons name="home-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/storeMenu')}>
                <Ionicons name="receipt-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/index')}>
                <Image source={require('../Media/UniBite_Logo_CC1.png')} style={styles.bottomNavImg} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/orders')}>
                <Ionicons name="fast-food-outline" size={26} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/profile')}>
                <Ionicons name="person-outline" size={26} color="black" />
            </TouchableOpacity>
        </View>
    </View>
  );
}