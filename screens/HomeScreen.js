import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';
import AccueilRoute from '../components/AccueilRoute';
import CalendarRoute from '../components/CalendarRoute';
import CompanyRoute from '../components/CompanyRoute';
import ProfilRoute from '../components/ProfilRoute';
import AssessRoute from '../components/AssessRoute';

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'accueil', title: 'Accueil', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'calendrier', title: 'Calendrier', focusedIcon: 'calendar' },
    { key: 'company', title: 'Entreprises', focusedIcon: 'store' },
    { key: 'assess', title: 'Evaluations', focusedIcon: 'star', unfocusedIcon: 'star-outline' },
    { key: 'profil', title: 'Profil', focusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    accueil: AccueilRoute,
    calendrier: CalendarRoute,
    company: CompanyRoute,
    assess: AssessRoute,
    profil: ProfilRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#426da5' }}
      inactiveColor='white'
    />
  );
};

export default HomeScreen;