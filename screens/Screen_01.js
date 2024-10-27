import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, Platform, TextInput } from 'react-native';
import axios from 'axios';

const Screen_01 = () => {
    const [category, setCategory] = useState([]);
    const [location, setLocation] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);

    const screenWidth = Dimensions.get('window').width;

    const medicine = [
        { "name": "Amoxicillin", "price": "$199,99", "star": "4.9", "description": "Used to treat infection such as respiratory tract infections , ear infection", "image": "https://i.imgur.com/4RmseSE.png", "id": "1" },
        { "name": "Paracctamol", "price": "$199,99", "star": "4.9", "description": "Used to treat infection such as respiratory tract infections , ear infection", "image": "https://i.imgur.com/0cTOD3K.png", "id": "2" },
        { "name": "Amoxicillin", "price": "$199,99", "star": "4.6", "description": "Used to treat infection such as respiratory tract infections , ear infection", "image": "https://i.imgur.com/2rWh1J4.png", "id": "3" },
        { "name": "Paracctamol", "price": "$199,99", "star": "4.9", "description": "Used to treat infection such as respiratory tract infections , ear infection", "image": "https://i.imgur.com/85tS9ga.png", "id": "4" },
        { "name": "wewewew", "price": "$199,99", "star": "5.0", "description": "Used to treat infection such as respiratory tract infections , ear infection", "image": "https://i.imgur.com/4RmseSE.png", "id": "5" },
        { "name": "sdsdsdsd", "price": "$199,99", "star": "4.9", "description": "Used to treat infection such as respiratory tract infections , ear infection", "image": "https://i.imgur.com/2rWh1J4.png", "id": "6" }
    ]

  

    const numColumns = 2;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView style={{ width: "100%", height: 500 }}>
                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <View style={styles.header}>
                            <View style={[styles.searchBox, searchFocused && styles.inputContainerFocused]}>
                                <Image source={require('../assets/anh01.png')} style={styles.searchIcon} />
                                <TextInput
                                    style={styles.searchInput}
                                    placeholder=" Medicine, Hospital, Doctor, etc"
                                    value={searchQuery}
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                    onChangeText={setSearchQuery}
                                />

                            </View>
                            <Image source={require('../assets/anh02.png')} style={styles.logoicon} />
                        </View>
                    </View>

                    {/* Banner */}
                    
                    <View>
                        <View>
                           
                            <Image style={styles.banner} source={require('../assets/anh03.png')} />
                            <Text style={{fontSize: 20 , fontWeight: 30, color:"#fff", fontWeight:'bold', top:10}}>Free Consultation</Text>
                        </View>

                        <Text style={{fontSize: 20 , fontWeight: 30, color:"#00BFFF", fontWeight:'bold', top:10}}>
                            Hello, Yaol Amari!
                        </Text>
                        <Text style={{fontSize: 15 , fontWeight: 20, color:"#A9A9A9",top:10 }}>
                            We have some additional suggestions for you.
                        </Text>

                        <TouchableOpacity style={styles.seeall}>
                            See all 
                        </TouchableOpacity>
                    </View>
                    {/* Product */}
                    <FlatList
                        data={medicine}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.categoryItem, { width: screenWidth / numColumns }]}><View style={styles.categoryIconContainer}>
                                <Image source={{ uri: item.image }} style={styles.categoryIcon} />
                            </View>
                                <Text style={styles.productText}>{item.name}</Text>
                                <Text style={styles.productText}>{item.price}</Text>
                                <Text style={styles.productText}>{item.star}</Text>
                                <Text style={styles.productText}>{item.description}</Text>
                            </TouchableOpacity>
                        )}
                        numColumns={numColumns}
                    />
                </ScrollView>

                {/* Footer or bottom nav */}
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh09.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh10.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Explore</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh11.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>My Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh12.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Hospital</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh13.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Support</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.navItem}>
                        <Image source={require('../assets/anh14.png')} style={styles.navicon} />
                        <Text style={styles.navLabel}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    headerContainer: {
        backgroundColor: '#fff',
        height: 100,
    },
    header: {
        padding: 20,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 10
        
    },
    logoicon: {
        width: 40,
        height: 40,
        border: 2,
        backgroundColor: "#1E90FF",
        borderRadius:50,
    },
    searchBox: {
        flex: 1, flexDirection: 'row',
        backgroundColor: '#ccc',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    inputContainerFocused: {
        borderColor: '#1f1f1f',
        borderWidth: 1,
    },
    searchInput: {
        backgroundColor: 'transparent',
        outlineWidth: 0,
        flex: 1,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    userInfoContainer: {
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingLeft: 23,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        color: '#ddd',
        marginLeft: 10,
    },
    iconBell: {
        width: 50,
        height: 50
    },
    sectionContainer: {
        padding: 20,
        paddingLeft: 10,
        paddingRight: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        fontSize: 20,
        margin: 10,
        textAlign: 'left',
    },
    icon3gach: {
        width: 30,
        height: 30,
    },
    categoryItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    categoryIconContainer: {
        
        width: "auto",
        height: "auto",
        
        
    },
    categoryIcon: {
        width: 64,
        height: 64,
    },
    productText: {
        marginTop: 8,
        fontSize: 14,
        color: '#000',
        
    },
    locationImage: {
        width: 122,
        height: 122,
        margin: 10,
        borderRadius: 10,
    },
    locationImageOfRec: {
        width: 192,
        height: 192,
        borderRadius: 10,
        margin: 10,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        backgroundColor: '#fff',
        padding: 10,
    },
    navItem: {
        // alignItems: 'center',
    },
    navLabel: {
        color: '#000',
        fontSize: 14,
        marginTop: 4,
        right:10
    },
    navicon: {
        width: 25,
        height: 25,
        padding:5,
    },
    banner: {
        width: "100%",
        height: 140,
    },
    seeall:{
        left:320,
        color:"#00BFFF",
        bottom:9,
    }
});

export default Screen_01;