/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function TimeSheet(props) {
  return (
    <div
      className={`time-sheet ${css(
        styles.content_box,
        styles.content_box_layout
      )}`}>
      <div className={css(styles.content_box_col)}>
        <div className={css(styles.cover_group, styles.cover_group_layout)}>
          <div className={css(styles.flex, styles.flex_layout)}>
            <div
              className={css(styles.cover_group1, styles.cover_group1_layout)}>
              <div
                className={css(styles.background, styles.background_layout)}
              />

              <div className={css(styles.foreground, styles.foreground_layout)}>
                <div
                  style={{
                    '--src': `url(${
                      require('assets/aeec20bbbb0f1e84f530cd33370b6d25.png')
                        .default
                    })`
                  }}
                  className={css(styles.icon, styles.icon_layout)}
                />
                <div className={css(styles.foreground_spacer)} />
                <h5 className={css(styles.test, styles.test_layout)}>
                  {'Test'}
                </h5>
                <div className={css(styles.foreground_spacer1)} />
                <h2
                  className={css(
                    styles.medium_title,
                    styles.medium_title_layout
                  )}>
                  {'expand_more'}
                </h2>
              </div>
            </div>

            <div
              className={css(styles.cover_group2, styles.cover_group2_layout)}>
              <div className={css(styles.cover_group2_col)}>
                <div className={css(styles.flex1, styles.flex1_layout)}>
                  <div className={css(styles.flex1_col)}>
                    <div className={css(styles.flex2, styles.flex2_layout)}>
                      <div className={css(styles.flex2_col)}>
                        <div className={css(styles.flex3, styles.flex3_layout)}>
                          <div className={css(styles.flex3_col)}>
                            <div
                              className={css(
                                styles.flex4,
                                styles.flex4_layout
                              )}>
                              <div className={css(styles.flex4_col)}>
                                <div
                                  className={css(
                                    styles.flex5,
                                    styles.flex5_layout
                                  )}>
                                  <div className={css(styles.flex5_col)}>
                                    <div
                                      className={css(
                                        styles.flex6,
                                        styles.flex6_layout
                                      )}>
                                      <div className={css(styles.flex6_col)}>
                                        <div
                                          className={css(
                                            styles.flex7,
                                            styles.flex7_layout
                                          )}>
                                          <div
                                            className={css(styles.flex7_col)}>
                                            <div
                                              className={css(
                                                styles.flex8,
                                                styles.flex8_layout
                                              )}>
                                              <div
                                                className={css(
                                                  styles.flex8_spacer
                                                )}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className={css(styles.line, styles.line_layout)} />

            <div className={css(styles.flex9, styles.flex9_layout)}>
              <h2 className={css(styles.today, styles.today_layout)}>
                {'today'}
              </h2>
              <div className={css(styles.flex9_spacer)} />
              <div className={css(styles.today1, styles.today1_layout)}>
                {'Today'}
              </div>
            </div>

            <div className={css(styles.flex10, styles.flex10_layout)}>
              <h2
                className={css(
                  styles.medium_title1,
                  styles.medium_title1_layout
                )}>
                {'calendar_today'}
              </h2>
              <div className={css(styles.flex10_spacer)} />
              <div className={css(styles.this_month, styles.this_month_layout)}>
                {'This month'}
              </div>
            </div>

            <div className={css(styles.flex11, styles.flex11_layout)}>
              <h2 className={css(styles.favorite, styles.favorite_layout)}>
                {'favorite'}
              </h2>
              <div className={css(styles.flex11_spacer)} />
              <div className={css(styles.favorites, styles.favorites_layout)}>
                {'Favorites'}
              </div>
            </div>

            <hr className={css(styles.line, styles.line_layout1)} />

            <div className={css(styles.flex12, styles.flex12_layout)}>
              <h2 className={css(styles.list, styles.list_layout)}>{'list'}</h2>
              <div className={css(styles.flex12_spacer)} />
              <div className={css(styles.export, styles.export_layout)}>
                {'Export'}
              </div>
            </div>

            <div className={css(styles.flex13, styles.flex13_layout)}>
              <h2
                className={css(
                  styles.medium_title2,
                  styles.medium_title2_layout
                )}>
                {'bar_chart'}
              </h2>
              <div className={css(styles.flex13_spacer)} />
              <div className={css(styles.dashboard, styles.dashboard_layout)}>
                {'Dashboard'}
              </div>
            </div>

            <hr className={css(styles.line, styles.line_layout2)} />
          </div>
        </div>
      </div>
      <div className={css(styles.content_box_col1)}>
        <div
          style={{
            '--src': `url(${
              require('assets/717d47b06d44b06fe302a4777da09621.jpeg').default
            })`
          }}
          className={css(styles.image, styles.image_layout)}
        />
      </div>
      <div className={css(styles.content_box_spacer)} />
      <div className={css(styles.content_box_spacer1)} />
      <div className={css(styles.content_box_col2)}>
        <article
          className={css(styles.content_box1, styles.content_box1_layout)}>
          <div className={css(styles.content_box1_spacer)} />
          <div className={css(styles.content_box1_col)}>
            <h2 className={css(styles.add, styles.add_layout)}>{'add'}</h2>
          </div>
          <div className={css(styles.content_box1_spacer1)} />
          <div className={css(styles.content_box1_col1)}>
            <div
              className={css(
                styles.new_registration,
                styles.new_registration_layout
              )}>
              {'New registration'}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

TimeSheet.inStorybook = true;

const styles = StyleSheet.create({
  content_box: {
    display: 'flex',
    backgroundColor: 'rgb(255,255,255)'
  },
  content_box_layout: {
    position: 'relative',
    overflow: 'hidden',
    minHeight: 883,
    flexGrow: 1
  },
  content_box_col: {
    display: 'flex',
    flex: '0 1 256px'
  },
  cover_group: {
    display: 'flex',
    backgroundColor: 'rgb(255,255,255)'
  },
  cover_group_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 883,
    flexGrow: 1
  },
  flex: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '8px 0px'
  },
  cover_group1: {
    display: 'flex'
  },
  cover_group1_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 48,
    margin: '0px 17px 0px 16px'
  },
  background: {
    backgroundColor: 'rgb(255,255,255)',
    border: '1px solid rgb(219,221,225)',
    borderRadius: '8px 8px 8px 8px',
    opacity: 0.8799999952316284
  },
  background_layout: {
    position: 'absolute',
    height: 48,
    flexGrow: 1,
    inset: '0px 0px auto'
  },
  foreground: {
    display: 'flex'
  },
  foreground_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1,
    margin: '4px 0px 4px 4px'
  },
  icon: {
    background: 'var(--src) center center / contain no-repeat',
    borderRadius: '20px 20px 20px 20px'
  },
  icon_layout: {
    position: 'relative',
    flex: '0 1 40px',
    height: 40,
    width: 40,
    minWidth: 40
  },
  foreground_spacer: {
    flex: '0 1 9px'
  },
  test: {
    font: '15px/1.2 "Helvetica", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px'
  },
  test_layout: {
    position: 'relative',
    margin: '11px 0px'
  },
  foreground_spacer1: {
    flex: '0 1 108px'
  },
  medium_title: {
    font: '24px/1 "Material Icons", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px'
  },
  medium_title_layout: {
    position: 'relative',
    margin: '6px 0px 10px'
  },
  cover_group2: {
    display: 'flex'
  },
  cover_group2_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 250,
    margin: '8px 0px 0px'
  },
  cover_group2_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex1: {
    display: 'flex'
  },
  flex1_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex1_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex2: {
    display: 'flex'
  },
  flex2_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex2_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex3: {
    display: 'flex'
  },
  flex3_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex3_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex4: {
    display: 'flex'
  },
  flex4_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex4_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex5: {
    display: 'flex'
  },
  flex5_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex5_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex6: {
    display: 'flex'
  },
  flex6_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex6_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex7: {
    display: 'flex'
  },
  flex7_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex7_col: {
    display: 'flex',
    flex: '0 1 255px'
  },
  flex8: {
    display: 'flex'
  },
  flex8_layout: {
    position: 'relative',
    overflow: 'visible',
    flexGrow: 1
  },
  flex8_spacer: {
    flex: '0 1 255px'
  },
  line: {
    backgroundColor: 'rgb(0,0,0)',
    opacity: 0.11999999731779099
  },
  line_layout: {
    position: 'relative',
    height: 1,
    margin: '0px 1px 0px 0px'
  },
  flex9: {
    display: 'flex'
  },
  flex9_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '17px 16px 0px'
  },
  today: {
    font: '24px/1 "Material Icons", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    opacity: 0.6000000238418579
  },
  today_layout: {
    position: 'relative'
  },
  flex9_spacer: {
    flex: '0 1 26px'
  },
  today1: {
    font: '13px/1.6923076923076923 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.09995999932289124px'
  },
  today1_layout: {
    position: 'relative',
    margin: '1px 0px'
  },
  flex10: {
    display: 'flex'
  },
  flex10_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '24px 16px 0px'
  },
  medium_title1: {
    font: '24px/1 "Material Icons", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    opacity: 0.6000000238418579
  },
  medium_title1_layout: {
    position: 'relative'
  },
  flex10_spacer: {
    flex: '0 1 26px'
  },
  this_month: {
    font: '14px/1.5714285714285714 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.09995999932289124px'
  },
  this_month_layout: {
    position: 'relative',
    margin: '1px 0px'
  },
  flex11: {
    display: 'flex'
  },
  flex11_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '24px 16px 0px'
  },
  favorite: {
    font: '24px/1 "Material Icons", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    opacity: 0.6000000238418579
  },
  favorite_layout: {
    position: 'relative'
  },
  flex11_spacer: {
    flex: '0 1 26px'
  },
  favorites: {
    font: '14px/1.5714285714285714 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.09995999932289124px'
  },
  favorites_layout: {
    position: 'relative',
    margin: '1px 0px'
  },
  line_layout1: {
    position: 'relative',
    height: 1,
    margin: '17px 1px 0px 0px'
  },
  flex12: {
    display: 'flex'
  },
  flex12_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '15px 16px 0px'
  },
  list: {
    font: '24px/1 "Material Icons", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    opacity: 0.6000000238418579
  },
  list_layout: {
    position: 'relative'
  },
  flex12_spacer: {
    flex: '0 1 26px'
  },
  export: {
    font: '14px/1.5714285714285714 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.09995999932289124px'
  },
  export_layout: {
    position: 'relative',
    margin: '1px 0px'
  },
  flex13: {
    display: 'flex'
  },
  flex13_layout: {
    position: 'relative',
    overflow: 'visible',
    margin: '24px 16px 0px'
  },
  medium_title2: {
    font: '24px/1 "Material Icons", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    opacity: 0.6000000238418579
  },
  medium_title2_layout: {
    position: 'relative'
  },
  flex13_spacer: {
    flex: '0 1 26px'
  },
  dashboard: {
    font: '14px/1.5714285714285714 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0.09995999932289124px'
  },
  dashboard_layout: {
    position: 'relative',
    margin: '1px 0px'
  },
  line_layout2: {
    position: 'relative',
    height: 1,
    margin: '17px 1px 300px 0px'
  },
  content_box_col1: {
    display: 'flex',
    flex: '0 0 auto',
    minWidth: 1
  },
  image: {
    background: 'var(--src) center center / contain no-repeat',
    opacity: 0.11999999731779099
  },
  image_layout: {
    position: 'relative',
    height: 883,
    flexGrow: 1
  },
  content_box_spacer: {
    flex: '0 0 auto',
    minWidth: 15
  },
  content_box_spacer1: {
    flex: '1 1 1048px'
  },
  content_box_col2: {
    display: 'flex',
    flex: '0 1 250px'
  },
  content_box1: {
    display: 'flex',
    backgroundColor: 'rgb(145,239,145)',
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.20392156862745098)',
    borderRadius: '24px 24px 24px 24px'
  },
  content_box1_layout: {
    position: 'relative',
    overflow: 'visible',
    minHeight: 48,
    flexGrow: 1,
    margin: '803px 0px 32px'
  },
  content_box1_spacer: {
    flex: '0 1 9px'
  },
  content_box1_col: {
    display: 'flex',
    flex: '0 1 30px'
  },
  add: {
    display: 'flex',
    justifyContent: 'center',
    font: '24px/1 "Material Icons", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0px',
    opacity: 0.8700000047683716
  },
  add_layout: {
    position: 'relative',
    flexGrow: 1,
    margin: '12px 0px'
  },
  content_box1_spacer1: {
    flex: '0 1 21px'
  },
  content_box1_col1: {
    display: 'flex',
    flex: '0 1 158px'
  },
  new_registration: {
    display: 'flex',
    justifyContent: 'center',
    font: '14px/1.2 "Roboto", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '1.250059962272644px',
    opacity: 0.8700000047683716
  },
  new_registration_layout: {
    position: 'relative',
    flexGrow: 1,
    margin: '16px 32px 15px 0px'
  }
});
