function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[45.6408836,-133.3593922],[65.5592924,-78.6340138]]).appendArc([66.8110187,-77.4190953],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.7002229,-70.184102]).appendArc([89.0578846,-70.1013691],{"radius":2,"clockwise":true,"large":false}).appendPoint([109.6599448,-67.2944238]).appendArc([110.6139822,-67.3967301],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.2981538,-74.9251529]).appendArc([132.0947502,-75.4600252],{"radius":2,"clockwise":true,"large":false}).appendPoint([146.0431257,-90.8205891]).appendArc([146.3839535,-91.1194981],{"radius":2,"clockwise":false,"large":false}).appendPoint([161.0736553,-101.3076623]).appendArc([161.8132319,-103.6351245],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.3842297,-110.3087529]).appendArc([161.2636149,-112.9927931],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.9380927,-112.9927931]).appendArc([173.817478,-110.3087529],{"radius":2,"clockwise":false,"large":false}).appendPoint([171.3884758,-103.6351245]).appendArc([172.1280522,-101.3076623],{"radius":2,"clockwise":true,"large":false}).appendPoint([186.817754,-91.1194981]).appendArc([187.1585819,-90.8205891],{"radius":2,"clockwise":false,"large":false}).appendPoint([201.1069574,-75.4600251]).appendArc([201.9035538,-74.9251529],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.5877253,-67.3967302]).appendArc([223.5417628,-67.2944238],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.143823,-70.101369]).appendArc([244.5014848,-70.184102],{"radius":2,"clockwise":true,"large":false}).appendPoint([266.3906889,-77.4190953]).appendArc([267.6424152,-78.6340138],{"radius":2,"clockwise":true,"large":false}).appendPoint([287.560824,-133.3593922]).appendArc([286.565676,-135.8373456],{"radius":2,"clockwise":true,"large":false}).appendPoint([221.2829674,-168.0158208]).appendArc([220.4144346,-168.8465115],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.3380735,-201.7399549]).appendArc([199.6773225,-202.5587455],{"radius":2,"clockwise":true,"large":false}).appendPoint([171.0925927,-187.9940982]).appendArc([170.1846117,-187.7761112],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.0170959,-187.7761112]).appendArc([162.1091149,-187.9940982],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.5243851,-202.5587455]).appendArc([130.8636341,-201.7399549],{"radius":2,"clockwise":true,"large":false}).appendPoint([112.787273,-168.8465115]).appendArc([111.9187402,-168.0158207],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.6360316,-135.8373455]).appendArc([45.6408835,-133.3593922],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        