/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { StyleSheet } from "react-native";
import {
  COLOR_WHITE,
  COLOR_BASE_CARD,
  FONT_TITLE_PRIMARY,
  FONT_OVERLINE_SECONDARY,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_OVERLINE_PAGE,
  FONT_BUTTON_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_SUBTITLE1_PRIMARY,
  FONT_SUBTITLE2_PRIMARY
} from "../../styles";
import { scale } from "../../utils/scaling";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  ButtonRight: {
    left: 24,
    paddingVertical: 26,
    height: scale(40),
    width: scale(40)
  },
  scrollContainer: {
    paddingVertical: 20
  },
  title: {
    ...FONT_TITLE_PRIMARY,
    left: 26,
    paddingVertical: 10
  },
  row: {
    left: 0,
    paddingVertical: 5,
    flexDirection: "row"
  },
  card: {
    width: scale(130),
    height: scale(180),
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLOR_BASE_CARD
  },
  left: { left: 15 },
  cardItem: {
    backgroundColor: COLOR_BASE_CARD
  },
  gambar: {
    height: scale(96),
    width: scale(130),
    bottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  cardImage: {
    width: scale(130),
    height: scale(90),
    backgroundColor: COLOR_BASE_CARD,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  subtitle: {
    ...FONT_OVERLINE_SECONDARY,
    color: COLOR_FONT_PRIMARY_MAIN,
    left: 26,
    paddingTop: 5
    // top: 25
  },
  titleBook: {
    ...FONT_BUTTON_PRIMARY,
    bottom: 15
  },
  page: {
    ...FONT_OVERLINE_PAGE,
    top: 10
  },
  pageana: {
    ...FONT_OVERLINE_PAGE,
    marginTop: 20,
    top: 10
  },
  content: {
    paddingHorizontal: 15,
    bottom: 20
  },
  SubTeory: {
    ...FONT_SUBTITLE1_PRIMARY,
    marginBottom: 10
  },
  Teory: {
    ...FONT_SUBTITLE2_PRIMARY,
    marginTop: 10,
    marginBottom: 5
  },
  teory: { ...FONT_CAPTION_PRIMARY }
});

export default styles;
