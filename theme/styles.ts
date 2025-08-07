// theme/styles.ts
import { Platform, StyleSheet } from 'react-native';

const BOTTOM_NAV_HEIGHT = 70;

const styles = StyleSheet.create({
  // Global
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F4F0',
  },
  scrollContent: {
    paddingBottom: BOTTOM_NAV_HEIGHT + 30,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F7F4F0',
  },

  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  locationText: {
    fontSize: 15,
    color: '#7F8C8D',
    marginTop: 4,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },

  // Search Bar
  searchBar: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#EAEAEA',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    color: '#888',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },

  // Section Title
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },

  // Categories
  categoryScroll: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
category: {
  backgroundColor: '#fff',
  paddingHorizontal: 16,
  paddingVertical: 12,
  marginRight: 12,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#ddd',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 3,
},
// theme/styles.ts

categoryCard: {
  width: 100,
  height: 120,
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 6,
  marginRight: 12,
  alignItems: 'center',
  justifyContent: 'flex-end',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
},

cardImage: {
  width: 80,
  height: 80,
  borderRadius: 10,
  marginBottom: 6,
  resizeMode: 'cover',
},

categoryLabel: {
  fontSize: 14,
  fontWeight: '500',
  textAlign: 'center',
},


  // Recommendations
  recommendations: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
card: {
  backgroundColor: '#fff',
  padding: 16,
  borderRadius: 16,
  marginRight: 12,
  width: 200,
  borderWidth: 1,
  borderColor: '#e5e7eb', // light gray
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  elevation: 4,
},
cardTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#1C1C1E',
},
cardSubtitle: {
  marginTop: 4,
  fontSize: 12,
  color: '#6b7280',
},


  // Nearby Salons
  nearbySalonsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  salonCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  salonImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  salonInfo: {
    padding: 15,
  },
  salonName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  salonType: {
    fontSize: 15,
    color: '#7F8C8D',
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  salonDiscount: {
    fontSize: 15,
    color: '#E74C3C',
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  salonRatingDistance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salonRating: {
    fontSize: 15,
    color: '#F39C12',
    marginRight: 8,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  salonDistance: {
    fontSize: 15,
    color: '#7F8C8D',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },

  // Buttons
  bookButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonPrimary: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B24B0',
    borderRadius: 30,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#6A0DAD',
    ...Platform.select({
      ios: {
        shadowColor: '#6A0DAD',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
    letterSpacing: 0.5,
  },
  buttonSecondary: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#6A0DAD',
    ...Platform.select({
      ios: {
        shadowColor: '#6A0DAD',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonSecondaryText: {
    color: '#6A0DAD',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
    letterSpacing: 0.3,
  },

  // Navigation
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    paddingVertical: 15,
    height: BOTTOM_NAV_HEIGHT,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  navItem: {
    fontSize: 13,
    color: '#7F8C8D',
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  navItemActive: {
    color: '#6B46C1',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#6B46C1',
  },

  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    width: '85%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#DCDCDC',
  //   borderRadius: 10,
  //   padding: 15,
  //   marginBottom: 15,
  //   fontSize: 16,
  //   color: '#2C3E50',
  //   fontFamily: Platform.OS === 'ios' ? 'System' : 'Poppins',
  //   backgroundColor: '#FDFDFD',
  // },
  discountPill: {
    backgroundColor: '#C8102E',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
recommendationCard: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 12,
  width: 160,
  marginRight: 12,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 4,
},
recommendationImage: {
  width: '100%',
  height: 100,
  borderRadius: 12,
  marginBottom: 8,
},
recommendationTitle: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#222',
  marginBottom: 4,
},
recommendationSubtitle: {
  fontSize: 12,
  color: '#666',
},

  button: {
  backgroundColor: '#D2042D', // primary
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 9999,
  alignItems: 'center',
  marginVertical: 8,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 5,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
  fontFamily: 'Poppins-SemiBold',
},
// In theme/styles.ts
bookingItem: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 12,
  marginVertical: 6,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
},

bookingText: {
  fontSize: 16,
  fontWeight: '500',
  color: '#1e1e1e',
  marginBottom: 4,
},

bookingTime: {
  fontSize: 14,
  color: '#666',
},

// styles.ts

slot: {
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#ccc',
  backgroundColor: '#fff',
  marginRight: 10,
},

slotActive: {
  backgroundColor: '#D80032',
  borderColor: '#D80032',
},

slotText: {
  fontSize: 16,
  color: '#333',
},

slotTextActive: {
  fontSize: 16,
  color: '#fff',
  fontWeight: 'bold',
},
 authContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f9f9f9',
  },
  authTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
    fontFamily: 'Poppins',
  },

  link: {
    color: '#6C63FF',
    marginTop: 12,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins',
  },

});

export default styles;
