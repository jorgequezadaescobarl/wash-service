import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../constants/theme';

const STAFF = [
  {
    id: 1,
    name: 'Elena Rodriguez',
    role: 'Senior Specialist · Residential',
    task: 'Villa Deep Clean',
    status: 'Disponible',
    statusColor: Colors.secondary,
    statusBg: 'rgba(0,106,99,0.1)',
    indicatorColor: Colors.secondary,
    actionIcon: 'assignment_ind',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Team Lead · Commercial',
    task: 'Office Tower A (Fl. 14)',
    status: 'Ocupado',
    statusColor: Colors.primary,
    statusBg: 'rgba(0,103,125,0.1)',
    indicatorColor: Colors.primaryContainer,
    actionIcon: 'assignment_turned_in',
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Technician · Specialized',
    task: '—',
    status: 'Fuera de Servicio',
    statusColor: Colors.onSurfaceVariant,
    statusBg: Colors.surfaceContainerHigh,
    indicatorColor: Colors.outlineVariant,
    dimmed: true,
    actionIcon: 'calendar_today',
  },
];

const CALENDAR_DAYS = [
  [25, 26, 27, 28, 29, 30, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, null, null, null, null, null],
];
const PREV_DAYS = [25, 26, 27, 28, 29, 30];

export default function PersonalScreen() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [filter, setFilter] = useState<'todos' | 'disponible'>('todos');

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
        {/* Dashboard Header */}
        <View style={styles.dashHeader}>
          <Text style={styles.dashTitle}>Operaciones de Personal</Text>
          <Text style={styles.dashSub}>Gestiona tu equipo de limpieza y asignaciones semanales.</Text>
        </View>

        {/* Calendar */}
        <View style={styles.calendarCard}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarMonth}>Abril 2026</Text>
            <View style={styles.calendarNav}>
              <TouchableOpacity style={styles.navBtn}>
                <Text style={styles.iconText}>chevron_left</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navBtn}>
                <Text style={styles.iconText}>chevron_right</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Weekday headers */}
          <View style={styles.weekRow}>
            {['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'].map((d) => (
              <Text key={d} style={styles.weekDay}>{d}</Text>
            ))}
          </View>

          {/* Days */}
          {CALENDAR_DAYS.map((week, wi) => (
            <View key={wi} style={styles.calRow}>
              {week.map((day, di) => {
                if (!day) return <View key={di} style={styles.calCell} />;
                const isToday = day === 5 && wi === 1;
                const hasEvent = day === 4;
                const isPrev = wi === 0 && di < 6;
                return (
                  <TouchableOpacity
                    key={di}
                    style={[
                      styles.calCell,
                      isToday && styles.calCellToday,
                      day === selectedDay && !isToday && styles.calCellSelected,
                    ]}
                    onPress={() => !isPrev && setSelectedDay(day)}
                  >
                    <Text style={[
                      styles.calDayText,
                      isPrev && { color: Colors.outlineVariant },
                      isToday && { color: '#fff' },
                    ]}>
                      {day}
                    </Text>
                    {hasEvent && !isToday && <View style={styles.calDot} />}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}

          {/* Alerts */}
          <View style={styles.alertsList}>
            <View style={styles.alertItem}>
              <View style={[styles.alertBar, { backgroundColor: Colors.primary }]} />
              <View>
                <Text style={styles.alertLabel}>Alertas</Text>
                <Text style={styles.alertText}>3 Servicios Hoy</Text>
              </View>
            </View>
            <View style={styles.alertItem}>
              <View style={[styles.alertBar, { backgroundColor: Colors.error }]} />
              <View>
                <Text style={styles.alertLabel}>Alertas</Text>
                <Text style={styles.alertText}>2 Ausencias Reportadas</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Staff Section */}
        <View style={styles.staffSection}>
          {/* Filters + Add */}
          <View style={styles.staffControls}>
            <View style={styles.staffFilters}>
              <TouchableOpacity
                style={[styles.filterChip, filter === 'todos' && styles.filterChipActive]}
                onPress={() => setFilter('todos')}
              >
                <Text style={[styles.filterText, filter === 'todos' && styles.filterTextActive]}>
                  Todo el Personal
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.filterChip, filter === 'disponible' && styles.filterChipActive]}
                onPress={() => setFilter('disponible')}
              >
                <Text style={[styles.filterText, filter === 'disponible' && styles.filterTextActive]}>
                  Disponible (12)
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={[styles.iconText, { color: '#fff', fontSize: 18 }]}>person_add</Text>
              <Text style={styles.addBtnText}>Añadir</Text>
            </TouchableOpacity>
          </View>

          {/* Staff List */}
          <View style={styles.staffList}>
            {STAFF.map((member) => (
              <View
                key={member.id}
                style={[styles.staffCard, member.dimmed && { opacity: 0.65 }]}
              >
                <View style={styles.staffLeft}>
                  <View style={styles.avatarWrap}>
                    <View style={[styles.avatar, member.dimmed && { backgroundColor: Colors.surfaceContainerHigh }]}>
                      <Text style={[styles.avatarText, member.dimmed && { color: Colors.outlineVariant }]}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </Text>
                    </View>
                    <View style={[styles.statusDot, { backgroundColor: member.indicatorColor }]} />
                  </View>
                  <View>
                    <Text style={styles.staffName}>{member.name}</Text>
                    <Text style={styles.staffRole}>{member.role}</Text>
                  </View>
                </View>
                <View style={styles.staffRight}>
                  <View>
                    <Text style={styles.taskLabel}>Tarea Actual</Text>
                    <Text style={[styles.taskValue, member.dimmed && { color: Colors.outlineVariant }]}>
                      {member.task}
                    </Text>
                  </View>
                  <View style={[styles.statusBadge, { backgroundColor: member.statusBg }]}>
                    <Text style={[styles.statusText, { color: member.statusColor }]}>
                      {member.status}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Text style={[styles.iconText, { fontSize: 20, color: Colors.onSurfaceVariant }]}>
                      {member.actionIcon}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Smart Scheduler */}
          <View style={styles.schedulerCard}>
            <View style={styles.schedulerInfo}>
              <Text style={styles.schedulerTitle}>Programador Inteligente</Text>
              <Text style={styles.schedulerSub}>
                Asigna automáticamente la ruta más eficiente para el personal disponible basado en proximidad y nivel de habilidad.
              </Text>
            </View>
            <TouchableOpacity style={styles.schedulerBtn}>
              <Text style={styles.schedulerBtnText}>Ejecutar Optimización IA</Text>
            </TouchableOpacity>
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
  dashHeader: { paddingHorizontal: Spacing.lg, gap: 4 },
  dashTitle: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 28,
    color: Colors.onSurface,
    letterSpacing: -0.5,
  },
  dashSub: {
    fontFamily: Typography.bodyMedium,
    fontSize: 14,
    color: Colors.onSurfaceVariant,
  },
  calendarCard: {
    marginHorizontal: Spacing.lg,
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    gap: Spacing.lg,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarMonth: {
    fontFamily: Typography.headline,
    fontSize: 18,
    color: Colors.onSurface,
  },
  calendarNav: { flexDirection: 'row', gap: 4 },
  navBtn: {
    width: 36,
    height: 36,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surfaceContainerLowest,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekDay: {
    fontFamily: Typography.bodyBold,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.outlineVariant,
    width: 36,
    textAlign: 'center',
  },
  calRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  calCell: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calCellToday: { backgroundColor: Colors.primary },
  calCellSelected: { backgroundColor: 'rgba(121,247,234,0.5)' },
  calDayText: {
    fontFamily: Typography.bodySemiBold,
    fontSize: 14,
    color: Colors.onSurface,
  },
  calDot: {
    position: 'absolute',
    bottom: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.secondary,
  },
  alertsList: { gap: Spacing.md, marginTop: Spacing.sm },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: Colors.surfaceContainerLowest,
    padding: Spacing.md,
    borderRadius: Radius.xl,
  },
  alertBar: { width: 5, height: 28, borderRadius: Radius.full },
  alertLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 9,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.outlineVariant,
  },
  alertText: {
    fontFamily: Typography.bodyBold,
    fontSize: 13,
    color: Colors.onSurface,
  },
  staffSection: { paddingHorizontal: Spacing.lg, gap: Spacing.lg },
  staffControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  staffFilters: { flexDirection: 'row', gap: Spacing.md, flex: 1 },
  filterChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 8,
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceContainerHighest,
  },
  filterChipActive: { backgroundColor: Colors.primaryContainer },
  filterText: {
    fontFamily: Typography.bodyBold,
    fontSize: 11,
    color: Colors.onSurfaceVariant,
  },
  filterTextActive: { color: Colors.onPrimaryContainer },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.primary,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    borderRadius: Radius.xl,
    ...Shadow.subtle,
  },
  addBtnText: {
    fontFamily: Typography.bodyBold,
    fontSize: 12,
    color: '#fff',
  },
  staffList: { gap: Spacing.md },
  staffCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: Radius['2xl'],
    padding: Spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.md,
    ...Shadow.subtle,
  },
  staffLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, flex: 1 },
  avatarWrap: { position: 'relative' },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: Radius.lg,
    backgroundColor: Colors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: Typography.headlineExtraBold,
    fontSize: 16,
    color: Colors.primary,
  },
  statusDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
    borderColor: '#fff',
  },
  staffName: {
    fontFamily: Typography.headline,
    fontSize: 15,
    color: Colors.onSurface,
  },
  staffRole: {
    fontFamily: Typography.body,
    fontSize: 12,
    color: Colors.onSurfaceVariant,
    marginTop: 2,
  },
  staffRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  taskLabel: {
    fontFamily: Typography.bodyBold,
    fontSize: 8,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: Colors.outlineVariant,
  },
  taskValue: {
    fontFamily: Typography.bodyBold,
    fontSize: 11,
    color: Colors.onSurface,
  },
  statusBadge: {
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
  actionBtn: {
    width: 40,
    height: 40,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  schedulerCard: {
    backgroundColor: 'rgba(0,104,117,0.06)',
    borderRadius: Radius['3xl'],
    padding: Spacing['2xl'],
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: 'rgba(0,104,117,0.2)',
    gap: Spacing.lg,
  },
  schedulerInfo: { gap: 6 },
  schedulerTitle: {
    fontFamily: Typography.headline,
    fontSize: 18,
    color: Colors.tertiary,
  },
  schedulerSub: {
    fontFamily: Typography.body,
    fontSize: 13,
    color: Colors.onTertiaryContainer,
    lineHeight: 18,
  },
  schedulerBtn: {
    backgroundColor: Colors.tertiary,
    paddingVertical: 14,
    paddingHorizontal: Spacing['2xl'],
    borderRadius: Radius['2xl'],
    alignItems: 'center',
  },
  schedulerBtnText: {
    fontFamily: Typography.bodyBold,
    fontSize: 14,
    color: '#fff',
  },
});
