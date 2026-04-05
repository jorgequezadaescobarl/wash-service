import { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Typography, Spacing, Radius, Shadow } from '../../constants/theme';

const STAFF = [
  { id: 1, name: 'Elena Rodriguez', role: 'Senior Specialist · Residential', task: 'Villa Deep Clean', status: 'Disponible', statusColor: Colors.secondary, statusBg: 'rgba(0,106,99,0.1)', indicatorColor: Colors.secondary, actionIcon: 'assignment-ind' as const },
  { id: 2, name: 'Marcus Chen', role: 'Team Lead · Commercial', task: 'Office Tower A (Fl. 14)', status: 'Ocupado', statusColor: Colors.primary, statusBg: 'rgba(0,103,125,0.1)', indicatorColor: Colors.primaryContainer, actionIcon: 'assignment-turned-in' as const },
  { id: 3, name: 'James Wilson', role: 'Technician · Specialized', task: '—', status: 'Fuera de Servicio', statusColor: Colors.onSurfaceVariant, statusBg: Colors.surfaceContainerHigh, indicatorColor: Colors.outlineVariant, dimmed: true, actionIcon: 'calendar-today' as const },
];

const CALENDAR_DAYS = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
];

export default function PersonalScreen() {
  const [selectedDay, setSelectedDay] = useState(5);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="menu" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.logo}>Pristine</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}>
          <MaterialIcons name="notifications" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
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
                <MaterialIcons name="chevron-left" size={20} color={Colors.onSurface} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.navBtn}>
                <MaterialIcons name="chevron-right" size={20} color={Colors.onSurface} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.weekRow}>
            {['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'].map((d) => (
              <Text key={d} style={styles.weekDay}>{d}</Text>
            ))}
          </View>
          {CALENDAR_DAYS.map((week, wi) => (
            <View key={wi} style={styles.calRow}>
              {week.map((day, di) => {
                if (!day) return <View key={di} style={styles.calCell} />;
                const isToday = day === 5;
                const hasEvent = day === 4 || day === 10;
                return (
                  <TouchableOpacity key={di} style={[styles.calCell, isToday && styles.calCellToday, day === selectedDay && !isToday && styles.calCellSelected]} onPress={() => setSelectedDay(day)}>
                    <Text style={[styles.calDayText, isToday && { color: '#fff' }]}>{day}</Text>
                    {hasEvent && !isToday && <View style={styles.calDot} />}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
          <View style={styles.alertsList}>
            <View style={styles.alertItem}>
              <View style={[styles.alertBar, { backgroundColor: Colors.primary }]} />
              <View>
                <Text style={styles.alertLabel}>Hoy</Text>
                <Text style={styles.alertText}>3 Servicios Programados</Text>
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

        {/* Staff */}
        <View style={styles.staffSection}>
          <View style={styles.staffControls}>
            <View style={[styles.filterChip, { backgroundColor: Colors.primaryContainer }]}>
              <Text style={[styles.filterText, { color: Colors.onPrimaryContainer }]}>Todo el Personal</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <MaterialIcons name="person-add" size={18} color="#fff" />
              <Text style={styles.addBtnText}>Añadir</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.staffList}>
            {STAFF.map((member) => (
              <View key={member.id} style={[styles.staffCard, member.dimmed && { opacity: 0.65 }]}>
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
                  <View style={[styles.statusBadge, { backgroundColor: member.statusBg }]}>
                    <Text style={[styles.statusText, { color: member.statusColor }]}>{member.status}</Text>
                  </View>
                  <TouchableOpacity style={styles.actionBtn}>
                    <MaterialIcons name={member.actionIcon} size={20} color={Colors.onSurfaceVariant} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Smart Scheduler */}
          <View style={styles.schedulerCard}>
            <Text style={styles.schedulerTitle}>Programador Inteligente</Text>
            <Text style={styles.schedulerSub}>Asigna automáticamente la ruta más eficiente para el personal disponible basado en proximidad y habilidad.</Text>
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
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Spacing.lg, paddingVertical: 12 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  iconBtn: { width: 40, height: 40, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center' },
  logo: { fontFamily: Typography.headlineExtraBold, fontSize: 18, color: Colors.primary, letterSpacing: -0.5 },
  scroll: { flex: 1 },
  content: { paddingBottom: 100, gap: Spacing.section },
  dashHeader: { paddingHorizontal: Spacing.lg, gap: 4 },
  dashTitle: { fontFamily: Typography.headlineExtraBold, fontSize: 28, color: Colors.onSurface, letterSpacing: -0.5 },
  dashSub: { fontFamily: Typography.bodyMedium, fontSize: 14, color: Colors.onSurfaceVariant },
  calendarCard: { marginHorizontal: Spacing.lg, backgroundColor: Colors.surfaceContainerLow, borderRadius: Radius['3xl'], padding: Spacing['2xl'], gap: Spacing.lg },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  calendarMonth: { fontFamily: Typography.headline, fontSize: 18, color: Colors.onSurface },
  calendarNav: { flexDirection: 'row', gap: 4 },
  navBtn: { width: 36, height: 36, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.surfaceContainerLowest },
  weekRow: { flexDirection: 'row', justifyContent: 'space-around' },
  weekDay: { fontFamily: Typography.bodyBold, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', color: Colors.outlineVariant, width: 36, textAlign: 'center' },
  calRow: { flexDirection: 'row', justifyContent: 'space-around' },
  calCell: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  calCellToday: { backgroundColor: Colors.primary },
  calCellSelected: { backgroundColor: 'rgba(121,247,234,0.5)' },
  calDayText: { fontFamily: Typography.bodySemiBold, fontSize: 14, color: Colors.onSurface },
  calDot: { position: 'absolute', bottom: 2, width: 4, height: 4, borderRadius: 2, backgroundColor: Colors.secondary },
  alertsList: { gap: Spacing.md, marginTop: Spacing.sm },
  alertItem: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, backgroundColor: Colors.surfaceContainerLowest, padding: Spacing.md, borderRadius: Radius.xl },
  alertBar: { width: 5, height: 28, borderRadius: Radius.full },
  alertLabel: { fontFamily: Typography.bodyBold, fontSize: 9, letterSpacing: 1, textTransform: 'uppercase', color: Colors.outlineVariant },
  alertText: { fontFamily: Typography.bodyBold, fontSize: 13, color: Colors.onSurface },
  staffSection: { paddingHorizontal: Spacing.lg, gap: Spacing.lg },
  staffControls: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: Spacing.md },
  filterChip: { paddingHorizontal: Spacing.md, paddingVertical: 8, borderRadius: Radius.full },
  filterText: { fontFamily: Typography.bodyBold, fontSize: 11 },
  addBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: Colors.primary, paddingHorizontal: Spacing.md, paddingVertical: 10, borderRadius: Radius.xl, ...Shadow.subtle },
  addBtnText: { fontFamily: Typography.bodyBold, fontSize: 12, color: '#fff' },
  staffList: { gap: Spacing.md },
  staffCard: { backgroundColor: Colors.surfaceContainerLowest, borderRadius: Radius['2xl'], padding: Spacing.xl, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', ...Shadow.subtle },
  staffLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, flex: 1 },
  avatarWrap: { position: 'relative' },
  avatar: { width: 52, height: 52, borderRadius: Radius.lg, backgroundColor: Colors.primaryFixed, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: Typography.headlineExtraBold, fontSize: 16, color: Colors.primary },
  statusDot: { position: 'absolute', bottom: -2, right: -2, width: 14, height: 14, borderRadius: 7, borderWidth: 2.5, borderColor: '#fff' },
  staffName: { fontFamily: Typography.headline, fontSize: 15, color: Colors.onSurface },
  staffRole: { fontFamily: Typography.body, fontSize: 12, color: Colors.onSurfaceVariant, marginTop: 2 },
  staffRight: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  statusText: { fontFamily: Typography.bodyBold, fontSize: 9, letterSpacing: 0.8, textTransform: 'uppercase' },
  actionBtn: { width: 40, height: 40, borderRadius: Radius.lg, backgroundColor: Colors.surfaceContainerLow, alignItems: 'center', justifyContent: 'center' },
  schedulerCard: { backgroundColor: 'rgba(0,104,117,0.06)', borderRadius: Radius['3xl'], padding: Spacing['2xl'], borderWidth: 1.5, borderStyle: 'dashed', borderColor: 'rgba(0,104,117,0.2)', gap: Spacing.md },
  schedulerTitle: { fontFamily: Typography.headline, fontSize: 18, color: Colors.tertiary },
  schedulerSub: { fontFamily: Typography.body, fontSize: 13, color: Colors.onTertiaryContainer, lineHeight: 18 },
  schedulerBtn: { backgroundColor: Colors.tertiary, paddingVertical: 14, borderRadius: Radius['2xl'], alignItems: 'center' },
  schedulerBtnText: { fontFamily: Typography.bodyBold, fontSize: 14, color: '#fff' },
});
