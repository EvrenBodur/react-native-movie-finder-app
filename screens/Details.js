import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetailTrailer,
  fetchMovieDetailCast,
} from "../src/actions/moviesActions";
import {
  fetchTvSerieDetailTrailer,
  fetchTvSerieDetailCast,
} from "../src/actions/tvSeriesActions";
import YoutubePlayer from "react-native-youtube-iframe";
import { getTvSeriesDetailCastSuccess } from "../src/actions/actionCreators";

const { width } = Dimensions.get("window");

const Details = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const { movieDetailTrailer } = useSelector(
    (state) => state.movieDetailTrailerStore
  );

  const { tvSerieDetailTrailer } = useSelector(
    (state) => state.tvSerieDetailTrailerStore
  );

  const { movieDetailCast } = useSelector(
    (state) => state.movieDetailCastStore
  );

  const { tvSerieDetailCast } = useSelector(
    (state) => state.tvSerieDetailCastStore
  );

  useEffect(() => {
    if (item.title) {
      dispatch(fetchMovieDetailTrailer(item.id));
      dispatch(fetchMovieDetailCast(item.id));
    }
    if (item.name) {
      dispatch(fetchTvSerieDetailTrailer(item.id));
      dispatch(fetchTvSerieDetailCast(item.id));
    }
  }, [item.id, dispatch]);

  const renderVideoItem = ({ item }) => {
    return (
      <View>
        <YoutubePlayer
          height={250}
          width={width}
          videoId={item.title ? `${item.key}` : `${item.key}`}
          volume={50}
          playbackRate={1}
          initialPlayerParams={{
            cc_lang_pref: "us",
            showClosedCaptions: true,
          }}
        />
      </View>
    );
  };

  const renderCastItem = ({ item }) => {
    return (
      <View style={styles.cast}>
        <View style={{ padding: 2 }}>
          <Image
            style={styles.castImage}
            resizeMode="stretch"
            source={{
              uri: `https://image.tmdb.org/t/p/w300${item.profile_path}`,
            }}
          />
          <Text style={styles.castName}>{item.name}</Text>
          <Text style={styles.castName}>as</Text>
          <Text style={styles.castName}>{item.character}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.detailContainer}>
      <View style={styles.detailTrailer}>
        <FlatList
          data={item.title ? movieDetailTrailer : tvSerieDetailTrailer}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.key.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ width: width }}>
        <Text style={{ color: "grey" }}>
          {item.title ? movieDetailTrailer.length : tvSerieDetailTrailer.length}
          {movieDetailTrailer.length === 1 || tvSerieDetailTrailer.length === 1
            ? "Trailer found"
            : "Trailers found slide left"}
        </Text>
      </View>
      <View style={styles.detailBody}>
        <Text style={styles.detailTitle}>{item.title || item.name}</Text>
        <Text style={styles.detailRate}>{item.vote_average}</Text>
        <Text style={styles.detailOverview}>{item.overview}</Text>
      </View>
      <View style={styles.casts}>
        <FlatList
          data={item.title ? movieDetailCast : tvSerieDetailCast}
          renderItem={renderCastItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: "#4B5863",
  },
  detailTrailer: {
    width: "100%",
    height: 220,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailBody: {
    justifyContent: "space-between",
    width: "100%",
    minHeight: 100,
    alignItems: "center",
    padding: 10,
  },
  detailTitle: {
    fontSize: 18,
    color: "whitesmoke",
    fontWeight: "700",
    letterSpacing: 1,
  },
  detailRate: {
    color: "tomato",
    fontSize: 16,
    fontWeight: "700",
  },
  detailOverview: {
    color: "whitesmoke",
    letterSpacing: 0.8,
  },
  casts: {
    width: width,
    height: width * 0.6,
    padding: 5,
  },
  cast: {
    width: width * 0.3,
    height: "100%",
    flexDirection: "column",
    borderRadius: 10,
  },
  castImage: {
    width: "100%",
    height: "75%",
    borderRadius: 10,
  },
  castName: {
    color: "whitesmoke",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    height: 15,
  },
});
