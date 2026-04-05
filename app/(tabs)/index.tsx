import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconText}>menu</Text>
        </TouchableOpacity>
        <Text style={styles.logo}>Pristine</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconText}>notifications</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.hero}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80' }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>¡Buenos Días!</Text>
            <Text style={styles.heroTitle}>¡Bienvenido{'\n'}de nuevo, Alex!</Text>
          </View>
        </View>

        {/* Upcoming Service */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Próxima Cita</Text>
          <View style={styles.card}>
            <View style={styles.upcomingTop}>
              <View style={styles.upcomingLeft}>
                <View style={styles.chip}>
                  <View style={styles.chipDot} />
                  <Text style={styles.chipText}>Deep Clean</Text>
                </View>
                <Text style={styles.upcomingTime}>Mañana a las{'\n'}11:30 AM</Text>
                <Text style={styles.upcomingSpecialist}>Especialista: Elena R.</Text>
              </View>
              <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editBtnText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Consistency Streak */}
        <View style={styles.streakContainer}>
          <View style={styles.streakIconWrap}>
            <Text style={[styles.streakIcon]}>auto_awesome</Text>
          </View>
          <View style={styles.streakInfo}>
            <Text style={styles.streakTitle}>¡14 Semanas de Constancia!</Text>
            <Text style={styles.streakSub}>Estás a 2 semanas de una limpieza Express gratis.</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressLabel}>Nivel 4</Text>
            <Text style={styles.progressLabel}>Recompensa Nivel 5</Text>
          </View>
        </View>

        {/* Quick Actions Bento */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Servicios y Cuidados</Text>
          <View style={styles.bentoGrid}>
            <TouchableOpacity style={[styles.bentoCard, styles.bentoPrimary]}>
              <Text style={[styles.bentoIcon, { color: '#fff' }]}>add_circle</Text>
              <Text style={[styles.bentoTitle, { color: '#fff' }]}>Reservar{'\n'}Limpieza</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bentoCard, styles.bentoWhite]}>
              <Text style={[styles.bentoIcon, { color: Colors.secondary }]}>card_giftcard</Text>
              <Text style={styles.bentoTitle}>Recomendar{'\n'}Amigo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bentoCard, styles.bentoWhite]}>
              <Text style={[styles.bentoIcon, { color: Colors.tertiary }]}>support_agent</Text>
              <Text style={styles.bentoTitle}>Centro de{'\n'}Ayuda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.bentoCard, styles.bentoLow]}>
              <Text style={[styles.bentoIcon, { color: Colors.onSurfaceVariant }]}>lightbulb</Text>
              <Text style={styles.bentoTitle}>Consejos de{'\n'}Limpieza</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Promo Offer */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Ofertas Exclusivas</Text>
          <View style={styles.promoCard}>
            <View style={styles.promoContent}>
              <Text style={styles.promoTag}>Promo de Temporada</Text>
              <Text style={styles.promoTitle}>20% en tu próxima{'\n'}Limpieza de Primavera</Text>
              <TouchableOpacity style={styles.promoCta}>
                <Text style={styles.promoCtaText}>Canjear Ahora</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
    backgroundColor: 'rgba(247,249,251,0.9)',
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontFamily: 'MaterialSymbolsOutlined' as any,
    fontSize: 24,
    color: Colors.primary,
  },
  logo: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 22,
    color: Colors.primary,
    letterSpacing: -0.5,
  },
  scroll: { flex: 1 },
  content: {
    paddingBottom: 100,
    gap: Spacing.section,
  },
  hero: {
    marginHorizontal: Spacing.lg,
    height: 200,
    borderRadius: Radius['4xl'],
    overflow: 'hidden',
    justifyContent: 'flex-end',
    backgroundColor: Colors.surfaceContainerLow,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.35,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  heroContent: {
    padding: Spacing['2xl'],
    gap: 4,
  },
  heroLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 11,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: Colors.primary,
  },
  heroTitle: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 30,
    color: Colors.onSurface,
    letterSpacing: -0.5,
    lineHeight: 36,
  },
  section: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  sectionLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
  },
  card: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    ...Shadow.subtle,
  },
  upcomingTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  upcomingLeft: { gap: 6, flex: 1 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(121,247,234,0.3)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
    alignSelf: 'flex-start',
  },
  chipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondary,
  },
  chipText: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: Colors.onSecondaryContainer,
  },
  upcomingTime: {
    fontFamily: Typography.headline,
    fontSize: 20,
    color: Colors.onSurface,
    lineHeight: 26,
    marginTop: 4,
  },
  upcomingSpecialist: {
    fontFamily: Typography.bodyMedium,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
  },
  editBtn: {
    backgroundColor: Colors.surfaceContainerHigh,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: Radius.xl,
  },
  editBtnText: {
    fontFamily: Typography.bodySemiBold,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
  },
  streakContainer: {
    marginHorizontal: Spacing.lg,
    backgroundColor: 'rgba(0,103,125,0.05)',
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    gap: Spacing.md,
  },
  streakIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakIcon: {
    fontFamily: 'MaterialSymbolsOutlined' as any,
    fontSize: 28,
    color: '#fff',
  },
  streakInfo: { gap: 2 },
  streakTitle: {
    fontFamily: Typography.headline,
    fontSize: 17,
    color: Colors.onSurface,
  },
  streakSub: {
    fontFamily: Typography.body,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
    lineHeight: 18,
  },
  progressBar: {
    height: 10,
    backgroundColor: Colors.surfaceContainerHighest,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '80%',
    backgroundColor: Colors.primary,
    borderRadius: Radius.full,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
  },
  bentoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  bentoCard: {
    width: '47.5%',
    height: 148,
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    justifyContent: 'space-between',
  },
  bentoPrimary: {
    backgroundColor: Colors.primary,
  },
  bentoWhite: {
    backgroundColor: Colors.surfaceContainerLowest,
    ...Shadow.subtle,
  },
  bentoLow: {
    backgroundColor: Colors.surfaceContainerLow,
  },
  bentoIcon: {
    fontFamily: 'MaterialSymbolsOutlined' as any,
    fontSize: 28,
  },
  bentoTitle: {
    fontFamily: Typography.headline,
    fontSize: 15,
    color: Colors.onSurface,
    lineHeight: 20,
  },
  promoCard: {
    backgroundColor: Colors.secondaryContainer,
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    overflow: 'hidden',
  },
  promoContent: { gap: Spacing.md, maxWidth: '75%' },
  promoTag: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: Colors.onSecondaryContainer,
    opacity: 0.7,
  },
  promoTitle: {
    fontFamily: Typography.headline,
    fontSize: 20,
    color: Colors.onSecondaryContainer,
    lineHeight: 26,
  },
  promoCta: {
    backgroundColor: Colors.onSecondaryContainer,
    paddingHorizontal: Spacing.lg,
    paddingVertical: 8,
    borderRadius: Radius.full,
    alignSelf: 'flex-start',
  },
  promoCtaText: {
    fontFamily: Typography.bodyBold,
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.secondaryContainer,
  },
});
