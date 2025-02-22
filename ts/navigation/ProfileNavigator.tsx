import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { HeaderSecondLevel } from "@pagopa/io-app-design-system";
import LogoutScreen from "../components/screens/LogoutScreen";
import { remindersOptInEnabled } from "../config";
import { DesignSystemNavigator } from "../features/design-system/navigation/navigator";
import LollipopPlayground from "../features/lollipop/playgrounds/LollipopPlayground";
import CalendarsPreferencesScreen from "../screens/profile/CalendarsPreferencesScreen";
import CgnLandingPlayground from "../screens/profile/CgnLandingPlayground";
import DownloadProfileDataScreen from "../screens/profile/DownloadProfileDataScreen";
import EmailForwardingScreen from "../screens/profile/EmailForwardingScreen";
import EmailInsertScreen from "../screens/profile/EmailInsertScreen";
import EmailReadScreen from "../screens/profile/EmailReadScreen";
import FiscalCodeScreen from "../screens/profile/FiscalCodeScreen";
import LanguagesPreferencesScreen from "../screens/profile/LanguagesPreferencesScreen";
import { NotificationsPreferencesScreen } from "../screens/profile/NotificationsPreferencesScreen";
import PinScreen from "../screens/profile/PinScreen";
import PreferencesScreen from "../screens/profile/PreferencesScreen";
import PrivacyMainScreen from "../screens/profile/PrivacyMainScreen";
import ProfileDataScreen from "../screens/profile/ProfileDataScreen";
import RemoveAccountDetails from "../screens/profile/RemoveAccountDetailsScreen";
import RemoveAccountInfo from "../screens/profile/RemoveAccountInfoScreen";
import RemoveAccountSuccess from "../screens/profile/RemoveAccountSuccessScreen";
import SecurityScreen from "../screens/profile/SecurityScreen";
import ServicesPreferenceScreen from "../screens/profile/ServicesPreferenceScreen";
import ShareDataScreen from "../screens/profile/ShareDataScreen";
import TosScreen from "../screens/profile/TosScreen";
import WebPlayground from "../screens/profile/WebPlayground";
import IdPayOnboardingPlayground from "../screens/profile/playgrounds/IdPayOnboardingPlayground";
import MarkdownPlayground from "../screens/profile/playgrounds/MarkdownPlayground";
import WalletPlayground from "../screens/profile/playgrounds/WalletPlayground";
import { isGestureEnabled } from "../utils/navigation";
import { ContextualHelpPropsMarkdown } from "../components/screens/BaseScreenComponent";
import I18n from "../i18n";
import { IdPayCodePlayGround } from "../screens/profile/playgrounds/IdPayCodePlayground";
import { useStartSupportRequest } from "../hooks/useStartSupportRequest";
import { ProfileParamsList } from "./params/ProfileParamsList";
import ROUTES from "./routes";

const profilePrivacyContextualHelpMarkdown: ContextualHelpPropsMarkdown = {
  title: "profile.main.privacy.privacyPolicy.contextualHelpTitle",
  body: "profile.main.privacy.privacyPolicy.contextualHelpContent"
};

const Stack = createStackNavigator<ProfileParamsList>();

/**
 * A navigator for all the screens of the Profile section
 */
const ProfileStackNavigator = () => {
  const startSupportRequest = useStartSupportRequest({
    faqCategories: ["privacy"],
    contextualHelpMarkdown: profilePrivacyContextualHelpMarkdown
  });
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.PROFILE_DATA}
      headerMode={"screen"}
      screenOptions={{ gestureEnabled: isGestureEnabled }}
    >
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_DATA}
        component={ProfileDataScreen}
      />
      <Stack.Screen
        options={{
          header: ({ navigation }) => (
            <HeaderSecondLevel
              type="singleAction"
              goBack={navigation.goBack}
              title={I18n.t("profile.main.privacy.title")}
              backAccessibilityLabel={I18n.t("global.buttons.back")}
              firstAction={{
                icon: "help",
                onPress: startSupportRequest,
                accessibilityLabel: I18n.t(
                  "global.accessibility.contextualHelp.open.label"
                )
              }}
            />
          )
        }}
        name={ROUTES.PROFILE_PRIVACY_MAIN}
        component={PrivacyMainScreen}
      />
      <Stack.Screen name={ROUTES.PROFILE_PRIVACY} component={TosScreen} />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_PRIVACY_SHARE_DATA}
        component={ShareDataScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_SECURITY}
        component={SecurityScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_PREFERENCES_SERVICES}
        component={ServicesPreferenceScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_PREFERENCES_EMAIL_FORWARDING}
        component={EmailForwardingScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_PREFERENCES_HOME}
        component={PreferencesScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_PREFERENCES_CALENDAR}
        component={CalendarsPreferencesScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_PREFERENCES_LANGUAGE}
        component={LanguagesPreferencesScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_LOGOUT}
        component={LogoutScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_FISCAL_CODE}
        component={FiscalCodeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.READ_EMAIL_SCREEN}
        component={EmailReadScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.INSERT_EMAIL_SCREEN}
        component={EmailInsertScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PIN_SCREEN}
        component={PinScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_DOWNLOAD_DATA}
        component={DownloadProfileDataScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.MARKDOWN_PLAYGROUND}
        component={MarkdownPlayground}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.DESIGN_SYSTEM}
        component={DesignSystemNavigator}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.WEB_PLAYGROUND}
        component={WebPlayground}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.LOLLIPOP_PLAYGROUND}
        component={LollipopPlayground}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.CGN_LANDING_PLAYGROUND}
        component={CgnLandingPlayground}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.IDPAY_ONBOARDING_PLAYGROUND}
        component={IdPayOnboardingPlayground}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.IDPAY_CODE_PLAYGROUND}
        component={IdPayCodePlayGround}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.WALLET_PLAYGROUND}
        component={WalletPlayground}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_REMOVE_ACCOUNT_INFO}
        component={RemoveAccountInfo}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_REMOVE_ACCOUNT_DETAILS}
        component={RemoveAccountDetails}
      />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name={ROUTES.PROFILE_REMOVE_ACCOUNT_SUCCESS}
        component={RemoveAccountSuccess}
      />
      {remindersOptInEnabled && (
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name={ROUTES.PROFILE_PREFERENCES_NOTIFICATIONS}
          component={NotificationsPreferencesScreen}
        />
      )}
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
