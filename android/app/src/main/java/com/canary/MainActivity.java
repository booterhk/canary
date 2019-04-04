package com.canary;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.orhanobut.logger.Logger;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "canary";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Logger.d("onCreate");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Logger.d("onStart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Logger.d("onResume");

    }

    @Override
    protected void onPause() {
        super.onPause();
        Logger.d("onPause");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Logger.d("onRestart");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Logger.d("onStop");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Logger.d("onDestroy");
    }
}
