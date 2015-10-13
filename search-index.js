var searchIndex = {};
searchIndex['cogset'] = {"items":[[0,"","cogset","Clustering algorithms.",null,null],[3,"Dbscan","","Clustering via the DBSCAN algorithm[1].",null,null],[3,"Optics","","Clustering via the OPTICS algorithm[1].",null,null],[3,"OpticsDbscanClustering","","An iterator over clusters generated by OPTICS using a DBSCAN-like\ncriterion for clustering.",null,null],[3,"BruteScan","","A point collection where queries are answered via brute-force\nscans over the whole list.",null,null],[3,"BruteScanNeighbours","","An iterator over the neighbours of a point in a `BruteScan`.",null,null],[3,"Euclid","","Points in ℝ<sup><i>n</i></sup> with the <i>L</i><sup>2</sup> norm.",null,null],[3,"Kmeans","","Clustering via the *k*-means algorithm (aka Lloyd's algorithm).",null,null],[3,"KmeansBuilder","","A builder for *k*-means to provide control over parameters for the\nalgorithm.",null,null],[11,"new","","Create a new DBSCAN instance, with the given `eps` and\n`min_points`.",0,{"inputs":[{"name":"dbscan"},{"name":"p"},{"name":"f64"},{"name":"usize"}],"output":{"name":"dbscan"}}],[11,"noise_points","","Points that have been classified as noise once the algorithm\nfinishes.",0,{"inputs":[{"name":"dbscan"}],"output":{"name":"hashset"}}],[11,"next","","",0,{"inputs":[{"name":"dbscan"}],"output":{"name":"option"}}],[11,"new","","Run the OPTICS algorithm on the index `points`, with the `eps`\nand `min_pts` parameters.",1,{"inputs":[{"name":"optics"},{"name":"p"},{"name":"f64"},{"name":"usize"}],"output":{"name":"optics"}}],[11,"dbscan_clustering","","Extract a clustering like one that DBSCAN would give.",1,{"inputs":[{"name":"optics"},{"name":"f64"}],"output":{"name":"opticsdbscanclustering"}}],[11,"noise_points","","",2,null],[11,"next","","",2,{"inputs":[{"name":"opticsdbscanclustering"}],"output":{"name":"option"}}],[11,"new","","Create a new `BruteScan`.",3,null],[11,"all_points","","",3,{"inputs":[{"name":"brutescan"}],"output":{"name":"range"}}],[11,"neighbours","","",3,{"inputs":[{"name":"brutescan"},{"name":"usize"},{"name":"f64"}],"output":{"name":"brutescanneighbours"}}],[11,"next","","",4,{"inputs":[{"name":"brutescanneighbours"}],"output":{"name":"option"}}],[11,"fmt","","",5,{"inputs":[{"name":"euclid"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"bool"}}],[11,"cmp","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"ordering"}}],[11,"eq","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"euclid"}}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"dist","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","",5,{"inputs":[{"name":"euclid"},{"name":"euclid"}],"output":{"name":"f64"}}],[11,"zero","","",5,{"inputs":[{"name":"euclid"}],"output":{"name":"self"}}],[11,"add","","",5,{"inputs":[{"name":"euclid"},{"name":"self"}],"output":null}],[11,"scale","","",5,{"inputs":[{"name":"euclid"},{"name":"f64"}],"output":null}],[11,"new","","Run k-means on `data` with the default settings.",6,null],[11,"clusters","","Retrieve the means and the clusters themselves that this\n*k*-means instance computed.",6,{"inputs":[{"name":"kmeans"}],"output":{"name":"vec"}}],[11,"converged","","Return whether the algorithm converged, and how many steps\nthat took.",6,{"inputs":[{"name":"kmeans"}],"output":{"name":"result"}}],[11,"new","","Create a default `KmeansBuilder`",7,{"inputs":[{"name":"kmeansbuilder"}],"output":{"name":"kmeansbuilder"}}],[11,"tolerance","","Set the tolerance used to decide if the iteration has\nconverged to `tol`.",7,{"inputs":[{"name":"kmeansbuilder"},{"name":"f64"}],"output":{"name":"kmeansbuilder"}}],[11,"max_iter","","Set the maximum number of iterations to run before aborting to\n`max_iter`.",7,{"inputs":[{"name":"kmeansbuilder"},{"name":"usize"}],"output":{"name":"kmeansbuilder"}}],[11,"kmeans","","Run *k*-means with the given settings.",7,null],[8,"Point","","A point in some (metric) space.",null,null],[10,"dist","","Accurately compute the distance from `self` to `other`.",8,{"inputs":[{"name":"point"},{"name":"self"}],"output":{"name":"f64"}}],[11,"dist_monotonic","","Accurately compute some monotonic function of the distance\nfrom `self` to `other`.",8,{"inputs":[{"name":"point"},{"name":"self"}],"output":{"name":"f64"}}],[11,"monotonic_transform","","Perform the increasing and non-negative transformation that\n`dist_monotonic` applies to `dist`.",8,{"inputs":[{"name":"point"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"monotonic_inverse","","Perform the inverse of `monotonic_transform` to `x`.",8,{"inputs":[{"name":"point"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"dist_lower_bound","","Compute an estimate of the distance from `self` to `other`.",8,{"inputs":[{"name":"point"},{"name":"self"}],"output":{"name":"f64"}}],[8,"RegionQuery","","Collections of points that can be queried to find nearby points.",null,null],[16,"Neighbours","cogset::RegionQuery","An iterator over the nearby points and their distances of a given one.",null,null],[10,"neighbours","cogset","Return an iterator over points in `self` with distance from\n`point` less than or equal to `epsilon`.",9,{"inputs":[{"name":"regionquery"},{"name":"point"},{"name":"f64"}],"output":{"name":"neighbours"}}],[8,"Points","","A data structure that contains points of some sort.",null,null],[16,"Point","cogset::Points","The representation of a point.",null,null],[8,"ListPoints","cogset","Collections of points that can list everything they contain.",null,null],[16,"AllPoints","cogset::ListPoints","An iterator over all the points in an instance of `Self`",null,null],[10,"all_points","cogset","Return an iterator over all points in `self`.",10,{"inputs":[{"name":"listpoints"}],"output":{"name":"allpoints"}}],[8,"Euclidean","","",null,null],[10,"zero","","",11,{"inputs":[{"name":"euclidean"}],"output":{"name":"self"}}],[10,"add","","",11,{"inputs":[{"name":"euclidean"},{"name":"self"}],"output":null}],[10,"scale","","",11,{"inputs":[{"name":"euclidean"},{"name":"f64"}],"output":null}],[11,"dist_monotonic","","Accurately compute some monotonic function of the distance\nfrom `self` to `other`.",8,null],[11,"monotonic_transform","","Perform the increasing and non-negative transformation that\n`dist_monotonic` applies to `dist`.",8,null],[11,"monotonic_inverse","","Perform the inverse of `monotonic_transform` to `x`.",8,null],[11,"dist_lower_bound","","Compute an estimate of the distance from `self` to `other`.",8,null]],"paths":[[3,"Dbscan"],[3,"Optics"],[3,"OpticsDbscanClustering"],[3,"BruteScan"],[3,"BruteScanNeighbours"],[3,"Euclid"],[3,"Kmeans"],[3,"KmeansBuilder"],[8,"Point"],[8,"RegionQuery"],[8,"ListPoints"],[8,"Euclidean"]]};
searchIndex['order_stat'] = {"items":[[0,"","order_stat","Calculate order statistics.",null,null],[5,"kth","","Compute the `k`th order statistic (`k`th smallest element) of\n`array` via the Floyd-Rivest Algorithm[1].",null,null],[5,"median_of_medians","","Calculate an approximate median of `array`.",null,null]],"paths":[]};
initSearch(searchIndex);