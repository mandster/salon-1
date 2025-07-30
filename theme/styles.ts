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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  locationText: {
    fontSize: 15,
    color: '#7F8C8D',
    marginTop: 4,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },

  // Categories
  categoryScroll: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  category: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 12,
    borderWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  categoryLabel: {
    color: '#555',
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },

  // Recommendations
  recommendations: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
    width: 200,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 6,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#7F8C8D',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  salonType: {
    fontSize: 15,
    color: '#7F8C8D',
    marginBottom: 5,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  salonDiscount: {
    fontSize: 15,
    color: '#E74C3C',
    fontWeight: '600',
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  salonRatingDistance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salonRating: {
    fontSize: 15,
    color: '#F39C12',
    marginRight: 8,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  salonDistance: {
    fontSize: 15,
    color: '#7F8C8D',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#2C3E50',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    backgroundColor: '#FDFDFD',
  },

  // Cards (Reusable)
  categoryCard: {
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  recommendationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    padding: 12,
    width: 140,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
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
  recommendationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
  },
});

export default styles;
