package com.petstore.api.world;

import com.petstore.api.httpsVerbs.BaseVerb;
import com.petstore.api.httpsVerbs.GetVerb;
import com.petstore.api.httpsVerbs.PostVerb;

public class WorldHelper {


    private static BaseVerb baseVerb;
    private static GetVerb getVerb;
    private static PostVerb postVerb;


    public BaseVerb baseVerb() {
        if(baseVerb != null) return baseVerb;
        baseVerb = new BaseVerb();
        return baseVerb;
    }


    public GetVerb getVerb() {
        if(getVerb != null) return getVerb;
        getVerb = new GetVerb();
        return getVerb;
    }

    public PostVerb postVerb() {
        if(postVerb != null) return postVerb;
        postVerb = new PostVerb();
        return postVerb;
    }


}
