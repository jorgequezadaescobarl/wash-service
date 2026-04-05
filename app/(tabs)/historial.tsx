import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../constants/theme';

type Filter = 'todos' | 'proximos' | 'completados';

const PAST_SERVICES = [
  {
    id: 1,
    type: 'Refrescar Express',
    specialist: 'Especialista: Marcus T.',
    price: '$85.00',
    status: 'Pagado',
    statusColor: Colors.secondary,
    statusBg: 'rgba(0,106,99,0.08)',
    icon: 'done_all',
    iconBg: Colors.secondaryContainer,
    iconColor: Colors.onSecondaryContainer,
  },
  {
    id: 2,
    type: 'Limpieza Estándar',
    specialist: 'Especialista: Elena R.',
    price: '$120.00',
    status: 'Pagado',
    statusColor: Colors.secondary,
    statusBg: 'rgba(0,106,99,0.08)',
    icon: 'done_all',
    iconBg: Colors.secondaryContainer,
    iconColor: Colors.onSecondaryContainer,
  },
  {
    id: 3,
    type: 'Especial de Mudanza',
    specialist: 'September 14, 2023',
    price: null,
    status: 'Cancelado',
    statusColor: Colors.onSurfaceVariant,
    statusBg: Colors.surfaceContainerHighest,
    icon: 'close',
    iconBg: Colors.surfaceContainerHighest,
    iconColor: Colors.onSurfaceVariant,
    dimmed: true,
  },
];

export default function HistorialScreen() {
  const [filter, setFilter] = useState<Filter>('todos');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>menu</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>Pristine</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <Text style={styles.iconText}>notifications</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Editorial Header */}
        <View style={styles.editorialHeader}>
          <Text style={styles.editorialTag}>Gestión</Text>
          <Text style={styles.editorialTitle}>Historial de{'\n'}Servicios</Text>
          <Text style={styles.editorialSub}>
            Revisa los registros de tu santuario de limpieza y las próximas renovaciones programadas.
          </Text>
        </View>

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersRow}
        >
          {(['todos', 'proximos', 'completados'] as Filter[]).map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setFilter(f)}
              style={[styles.filterChip, filter === f && styles.filterChipActive]}
            >
              <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>
                {f === 'todos' ? 'Todos' : f === 'proximos' ? 'Próximos' : 'Completados'}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Upcoming Hero Card */}
        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <View style={styles.sectionBar} />
            <Text style={styles.sectionTitle}>Próxima Cita</Text>
          </View>
          <View style={styles.upcomingCard}>
            <View style={styles.upcomingImage}>
              <View style={styles.upcomingImageOverlay} />
              <View style={styles.upcomingBadges}>
                <View style={styles.badgePrimary}>
                  <Text style={styles.badgeText}>Próximo</Text>
                </View>
                <View style={styles.badgeGlass}>
                  <Text style={styles.badgeText}>Limpieza Profunda</Text>
                </View>
              </View>
            </View>
            <View style={styles.upcomingBody}>
              <View style={styles.upcomingBodyTop}>
                <View>
                  <Text style={styles.upcomingTitle}>Limpieza Estándar</Text>
                  <Text style={styles.upcomingSpecialist}>Especialista: Elena R.</Text>
                </View>
              </View>
              <View style={styles.upcomingMeta}>
                <View style={styles.metaBox}>
                  <Text style={styles.metaLabel}>Especialista</Text>
                  <Text style={styles.metaValue}>Elena Rodriguez</Text>
                </View>
                <View style={styles.metaBox}>
                  <Text style={styles.metaLabel}>Horario</Text>
                  <Text style={styles.metaValue}>09:00 - 1:30 PM</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.manageBtn}>
                <Text style={styles.manageBtnText}>Gestionar Reserva</Text>
                <Text style={[styles.iconText, { fontSize: 16, color: '#fff' }]}>arrow_forward</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <View style={[styles.sectionBar, { backgroundColor: Colors.tertiary }]} />
            <Text style={styles.sectionTitle}>Actividad Reciente</Text>
          </View>
          <View style={styles.pastList}>
            {PAST_SERVICES.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.pastCard, item.dimmed && { opacity: 0.7 }]}
                activeOpacity={0.8}
              >
                <View style={styles.pastTop}>
                  <View style={styles.pastLeft}>
                    <View style={[styles.pastIcon, { backgroundColor: item.iconBg }]}>
                      <Text style={[styles.iconText, { color: item.iconColor, fontSize: 20 }]}>
                        {item.icon}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.pastType}>{item.type}</Text>
                      <Text style={styles.pastSpecialist}>{item.specialist}</Text>
                    </View>
                  </View>
                  <View style={[styles.statusChip, { backgroundColor: item.statusBg }]}>
                    <Text style={[styles.statusText, { color: item.statusColor }]}>
                      {item.status}
                    </Text>
                  </View>
                </View>
                {item.price && (
                  <View style={styles.pastBottom}>
                    <Text style={styles.pastDate}>Hace 2 semanas</Text>
                    <Text style={styles.pastPrice}>{item.price}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.viewAllBtn}>
              <Text style={styles.viewAllText}>Ver Archivo Completo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Streak Banner */}
        <View style={styles.streakBanner}>
          <Text style={styles.streakTitle}>Racha de Constancia</Text>
          <Text style={styles.streakSub}>
            ¡Has mantenido un ambiente de hogar impecable durante 14 semanas seguidas!
          </Text>
          <View style={styles.streakBar}>
            <View style={styles.streakFill} />
          </View>
          <View style={styles.streakLabels}>
            <Text style={styles.streakLabel}>14 Limpiezas</Text>
            <Text style={styles.streakLabel}>Próximo Premio: 20</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.surface },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontFamily: 'MaterialSymbolsOutlined' as any,
    fontSize: 22,
    color: Colors.primary,
  },
  logo: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 18,
    color: Colors.primary,
    letterSpacing: -0.5,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 100, gap: Spacing.section },
  editorialHeader: { paddingHorizontal: Spacing.lg, gap: 6 },
  editorialTag: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.primary,
  },
  editorialTitle: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 32,
    color: Colors.onSurface,
    letterSpacing: -1,
    lineHeight: 38,
  },
  editorialSub: {
    fontFamily: Typography.body,
    fontSize: 14,
    color: Colors.onSurfaceVariant,
    lineHeight: 20,
    maxWidth: 320,
  },
  filtersRow: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },
  filterChip: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: 10,
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceContainerHigh,
  },
  filterChipActive: { backgroundColor: Colors.primary },
  filterText: {
    fontFamily: Typography.bodyBold,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
  },
  filterTextActive: { color: '#fff' },
  section: { paddingHorizontal: Spacing.lg, gap: Spacing.md },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  sectionBar: {
    width: 5,
    height: 22,
    borderRadius: Radius.full,
    backgroundColor: Colors.primary,
  },
  sectionTitle: {
    fontFamily: Typography.headline,
    fontSize: 18,
    color: Colors.onSurface,
  },
  upcomingCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radius['3xl'],
    overflow: 'hidden',
    ...Shadow.subtle,
  },
  upcomingImage: {
    height: 160,
    backgroundColor: Colors.surfaceContainerHigh,
    justifyContent: 'flex-end',
    padding: Spacing.xl,
  },
  upcomingImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(25,28,30,0.3)',
  },
  upcomingBadges: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  badgePrimary: {
    backgroundColor: Colors.secondaryContainer,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
  },
  badgeGlass: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
  },
  badgeText: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: '#fff',
  },
  upcomingBody: { padding: Spacing['2xl'], gap: Spacing.lg },
  upcomingBodyTop: { flexDirection: 'row', justifyContent: 'space-between' },
  upcomingTitle: {
    fontFamily: Typography.headline,
    fontSize: 20,
    color: Colors.onSurface,
  },
  upcomingSpecialist: {
    fontFamily: Typography.bodyMedium,
    fontSize: 13,
    color: Colors.onSurfaceVariant,
    marginTop: 2,
  },
  upcomingMeta: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  metaBox: {
    flex: 1,
    backgroundColor: Colors.surfaceContainerLow,
    padding: Spacing.md,
    borderRadius: Radius.xl,
    gap: 4,
  },
  metaLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
  },
  metaValue: {
    fontFamily: Typography.bodyBold,
    fontSize: 13,
    color: Colors.onSurface,
  },
  manageBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: Radius.xl,
  },
  manageBtnText: {
    fontFamily: Typography.bodyBold,
    fontSize: 14,
    color: '#fff',
  },
  pastList: { gap: Spacing.md },
  pastCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    padding: Spacing['2xl'],
    borderRadius: Radius['2xl'],
    gap: Spacing.md,
    ...Shadow.subtle,
  },
  pastTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pastLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  pastIcon: {
    width: 44,
    height: 44,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pastType: {
    fontFamily: Typography.headline,
    fontSize: 14,
    color: Colors.onSurface,
  },
  pastSpecialist: {
    fontFamily: Typography.body,
    fontSize: 11,
    color: Colors.onSurfaceVariant,
    marginTop: 2,
  },
  statusChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.full,
  },
  statusText: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  pastBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  pastDate: {
    fontFamily: Typography.bodyMedium,
    fontSize: 12,
    color: Colors.onSurfaceVariant,
  },
  pastPrice: {
    fontFamily: Typography.bodyBold,
    fontSize: 14,
    color: Colors.primary,
  },
  viewAllBtn: {
    paddingVertical: 12,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: Colors.outlineVariant,
    borderRadius: Radius.xl,
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: Colors.onSurfaceVariant,
  },
  streakBanner: {
    marginHorizontal: Spacing.lg,
    backgroundColor: Colors.tertiary,
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    gap: Spacing.md,
    overflow: 'hidden',
  },
  streakTitle: {
    fontFamily: Typography.headline,
    fontSize: 20,
    color: '#fff',
  },
  streakSub: {
    fontFamily: Typography.body,
    fontSize: 13,
    color: 'rgba(200,240,255,0.9)',
    lineHeight: 18,
    maxWidth: 280,
  },
  streakBar: {
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  streakFill: {
    height: '100%',
    width: '72%',
    backgroundColor: Colors.secondaryContainer,
    borderRadius: Radius.full,
  },
  streakLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  streakLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'rgba(200,240,255,0.8)',
  },
});
