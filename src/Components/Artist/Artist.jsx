import React from "react";

const Artist = () => {
  return (
    <>
      <div class="artist">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 artist_image_col">
              <div class="artist_image">
                <img src="images/dani2.jpg" alt="" />
              </div>
            </div>

            <div class="col-lg-7 offset-lg-1">
              <div class="artist_content">
                <div class="section_title_container">
                  <div class="section_subtitle">About</div>
                  <div class="section_title">
                    <h1>The Artist</h1>
                  </div>
                </div>
                <div class="artist_text">
                  <p>
                    {" "}
                    In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                    Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                    volutpat. Maecenas sollicitudin est in libero pretium
                    interdum. Nullam volutpat dui sem, ac congue purus luctus
                    nec. Curabitur luctus luctus erat, sit amet facilisis quam
                    congue quis. Quisque ornare luctus erat id dignissim. Nullam
                    ac nunc quis ex porttitor luctus.
                  </p>
                  <p>
                    Integer sed facilisis eros. In iaculis rhoncus velit in
                    malesuada. In hac habitasse platea dictumst. Fusce erat ex,
                    consectetur sit amet ornare suscipit, porta et erat. Donec
                    nec nisi in nibh commodo laoreet. Mauris dapibus justo ut
                    feugiat malesuada. Fusce ultricies ante tortor, non
                    vestibulum est feugiat ut.
                  </p>
                </div>
                <div class="artist_sig">
                  <img src="images/sig.png" alt="" />
                </div>
                <div class="single_player_container d-flex flex-column align-items-start justify-content-center">
                  <div class="single_player">
                    <div id="jplayer_2" class="jp-jplayer"></div>
                    <div
                      id="jp_container_2"
                      class="jp-audio"
                      role="application"
                      aria-label="media player"
                    >
                      <div class="jp-type-single">
                        <div class="player_details d-flex flex-row align-items-center justify-content-start">
                          <div class="jp-details">
                            <div>playing</div>
                            <div class="jp-title" aria-label="title">
                              &nbsp;
                            </div>
                          </div>
                          <div class="jp-controls-holder ml-auto">
                            <button class="jp-play" tabindex="0"></button>
                          </div>
                        </div>
                        <div class="player_controls">
                          <div class="jp-gui jp-interface d-flex flex-row align-items-center justify-content-start">
                            <div class="jp-controls-holder time_controls d-flex flex-row align-items-center justify-content-start">
                              <div>
                                <div
                                  class="jp-current-time"
                                  role="timer"
                                  aria-label="time"
                                >
                                  &nbsp;
                                </div>
                              </div>
                              <div class="jp-progress">
                                <div class="jp-seek-bar">
                                  <div class="jp-play-bar"></div>
                                </div>
                              </div>
                              <div>
                                <div
                                  class="jp-duration ml-auto"
                                  role="timer"
                                  aria-label="duration"
                                >
                                  &nbsp;
                                </div>
                              </div>
                            </div>
                            <div class="jp-volume-controls d-flex flex-row align-items-center justify-content-start ml-auto">
                              <button class="jp-mute" tabindex="0"></button>
                              <div class="jp-volume-bar">
                                <div class="jp-volume-bar-value"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="jp-no-solution">
                          <span>Update Required</span>
                          To play the media you will need to either update your
                          browser to a recent version or update your{" "}
                          <a
                            href="http://get.adobe.com/flashplayer/"
                            target="_blank"
                          >
                            Flash plugin
                          </a>
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
    </>
  );
};

export default Artist;
