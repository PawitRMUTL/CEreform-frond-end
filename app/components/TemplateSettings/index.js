import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react18-swipeable-views';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import ArrowBack from '@mui/icons-material/ArrowBack';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Palette from '@mui/icons-material/Palette';
import Close from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {
  LeftSidebarThumb,
  LeftSidebarBigThumb,
  TopNavigationThumb,
  MegaMenuThumb,
} from './templatePreview';
import ThemeThumb from './ThemeThumbs';
import LayoutThumb from './LayoutThumb';
import useStyles from './settings-jss';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 1.5 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function TemplateSettings(props) {
  const [type, setType] = useState(0);
  const [show, setShow] = useState(false);
  const [showAllThemes, setShowAllThemes] = useState(false);
  const [dark, setDark] = useState(false); // eslint-disable-line
  const [bgPositionState, setBgPosition] = useState('half'); // eslint-disable-line
  const [decorated, setDecoration] = useState(true); // eslint-disable-line
  const [rtl, setRtl] = useState(false); // eslint-disable-line
  const [gradientState, setGradient] = useState(true); // eslint-disable-line

  // TaB Handle
  const handleChangeTab = (event, typeParam) => {
    setType(typeParam);
  };

  const handleChangeIndexTab = index => {
    setType(index);
  };

  // Theme Mode Handle
  const handleSwitchMode = () => {
    const { changeMode } = props;
    // const mode = event.target.checked ? 'light' : 'light';
    changeMode('light');
    setDark('light');
  };

  const handeSwitchDirection = event => { // eslint-disable-line
    const { changeDirection } = props;
    const dir = event.target.checked ? 'rtl' : 'ltr';
    changeDirection(dir);
    setRtl(event.target.checked);
  };

  // Background Position Handle
  const handleBgChangePosition = event => {
    const { changeBgPosition } = props;
    setBgPosition(event.target.value);
    changeBgPosition(event.target.value);
  };

  // Decoration Handle
  const handleChangeDecoration = event => {
    const { changeDecoration } = props;
    setDecoration(event.target.checked);
    changeDecoration(event.target.checked);
  };

  // Decoration Handle
  const handleChangeGradient = event => {
    const { changeGradient } = props;
    setGradient(event.target.checked);
    changeGradient(event.target.checked);
  };

  // Layout Handle
  const handleChangeLayout = event => {
    const { changeLayout } = props;
    changeLayout(event.target.value);
  };

  // Show Hide Panel
  const handleTogglePanel = () => {
    setShow(!show);
  };

  // Toggle All Themes
  const handleToggleAllThemes = () => {
    setShowAllThemes(!showAllThemes);
  };

  const { classes, cx } = useStyles();
  const {
    palette,
    mode,
    gradient,
    decoration,
    bgPosition,
    selectedValue,
    layout,
    direction,
    changeTheme,
    changeRandomTheme
  } = props;
  const getItem = dataArray => dataArray.map((item, index) => (
    <FormControlLabel
      key={index.toString()}
      className={
        cx(
          classes.themeField,
          index > 7 && !showAllThemes ? classes.hide : ''
        )
      }
      control={(
        <ThemeThumb
          value={item.value}
          selectedValue={selectedValue}
          handleChange={changeTheme}
          name={item.name}
        />
      )}
    />
  ));

  return (
    <aside
      className={
        cx(
          classes.settingSidebar,
          layout === 'right-sidebar' ? classes.leftSidebar : classes.rightSidebar,
          show && classes.expanded
        )
      }
    >
      <div className={classes.toggleButton}>
        <Fab
          size="small"
          color="primary"
          aria-label="toggle"
          className={classes.button}
          onClick={handleTogglePanel}
          classes={{
            root: classes.buttonDrawer,
          }}
        >
          {show ? <Close /> : <Palette />}
        </Fab>
      </div>
      <Slide direction={direction === 'rtl' ? 'right' : 'left'} in={show} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.tab} color="default">
            <div className={classes.header}>
              <IconButton
                onClick={handleTogglePanel}
                className={classes.backButton}
                aria-label="Baack"
                size="large">
                <ArrowBack />
              </IconButton>
              <Typography variant="button">Template Settings</Typography>
            </div>
            <Tabs
              value={type}
              onChange={handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Theme" />
              <Tab label="Layout" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={type}
            onChangeIndex={handleChangeIndexTab}
          >
            <TabContainer>
              <section className={classes.settingWraper}>
                <Paper className={classes.optBlock}>
                  <FormControl variant="standard" component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>invert_colors</Icon>
                      Theme Mode
                    </FormLabel>
                    <FormGroup className={classes.themeMode}>
                      <span>Light Mode</span>
                      <FormControlLabel
                        className={classes.switch}
                        control={(
                          <Switch
                            checked={mode === 'light'}
                            onChange={(e) => handleSwitchMode(e)}
                            value="dark"
                            color="default"
                            classes={{
                              track: classes.themeCheckBar,
                              thumb: classes.themeCheck,
                            }}
                          />
                        )}
                      />
                      <span>Dark Mode</span>
                    </FormGroup>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl variant="standard" component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>
                        format_textdirection_r_to_l
                      </Icon>
                      Layout Direction
                    </FormLabel>
                    <FormGroup className={classes.themeMode}>
                      <span>LTR</span>
                      <FormControlLabel
                        className={classes.switch}
                        control={(
                          <Switch
                            checked={direction === 'rtl'}
                            onChange={(e) => handeSwitchDirection(e)}
                            value="rtl"
                            color="default"
                            classes={{
                              track: classes.themeCheckBar,
                              thumb: classes.themeCheck,
                            }}
                          />
                        )}
                      />
                      <span>RTL</span>
                    </FormGroup>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl variant="standard" component="fieldset" className={classes.themeGroup}>
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>color_lens</Icon>
                      Theme Color
                    </FormLabel>
                    <div className={classes.randomThemeField}>
                      <ButtonBase onClick={() => changeRandomTheme()}>
                        <img src="/images/random.jpg" alt="random" />
                      </ButtonBase>
                    </div>
                    { palette !== undefined && getItem(palette) }
                    <div className={classes.center}>
                      <Button color="primary" onClick={handleToggleAllThemes}>
                        {showAllThemes ? 'Hide Some' : 'Show All'}
                      </Button>
                    </div>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl variant="standard" component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>branding_watermark</Icon>
                      Background Size
                    </FormLabel>
                    <FormControl variant="standard" className={classes.formControl}>
                      <InputLabel htmlFor="background-position">Choose Size</InputLabel>
                      <Select
                        variant="standard"
                        value={bgPosition}
                        onChange={handleBgChangePosition}
                        inputProps={{
                          name: 'position',
                          id: 'background-position',
                        }}>
                        <MenuItem value="header">Header</MenuItem>
                        <MenuItem value="half">Half</MenuItem>
                        <MenuItem value="full">Full</MenuItem>
                      </Select>
                    </FormControl>
                  </FormControl>
                </Paper>
                <Paper className={classes.optBlock}>
                  <FormControl variant="standard" component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>texture</Icon>
                      Art Decoration
                    </FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={decoration}
                            onChange={(e) => handleChangeDecoration(e)}
                            value="decorated"
                          />
                        )}
                        label="Show Art Decoration"
                      />
                    </FormGroup>
                    <FormGroup row>
                      <FormControlLabel
                        control={(
                          <Checkbox
                            checked={gradient}
                            onChange={(e) => handleChangeGradient(e)}
                            value="gradient"
                          />
                        )}
                        label="Use Gradient"
                      />
                    </FormGroup>
                  </FormControl>
                </Paper>
              </section>
              {/* END */}
            </TabContainer>
            <TabContainer>
              <section className={classes.settingWraper}>
                <Paper className={classes.optBlock}>
                  <FormControl variant="standard" component="fieldset">
                    <FormLabel component="legend" className={classes.title}>
                      <Icon className={classes.icon}>chrome_reader_mode</Icon>
                      Navigation Layout
                    </FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="left-sidebar"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Left Sidebar"
                            preview={<LeftSidebarThumb />}
                          />
                        )}
                      />
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="big-sidebar"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Left Big Sidebar"
                            preview={<LeftSidebarBigThumb />}
                          />
                        )}
                      />
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="top-navigation"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Top Navigation"
                            preview={<TopNavigationThumb />}
                          />
                        )}
                      />
                      <FormControlLabel
                        className={classes.layoutField}
                        control={(
                          <LayoutThumb
                            value="mega-menu"
                            selectedLayout={layout}
                            handleChange={handleChangeLayout}
                            name="Mega Menu"
                            preview={<MegaMenuThumb />}
                          />
                        )}
                      />
                    </FormGroup>
                  </FormControl>
                </Paper>
              </section>
            </TabContainer>
          </SwipeableViews>
        </div>
      </Slide>
    </aside>
  );
}

TemplateSettings.propTypes = {
  palette: PropTypes.array,
  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeRandomTheme: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeGradient: PropTypes.func.isRequired,
  changeDecoration: PropTypes.func.isRequired,
  changeBgPosition: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

TemplateSettings.defaultProps = {
  palette: []
};

export default TemplateSettings;
